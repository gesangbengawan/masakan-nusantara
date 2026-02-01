"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { Save } from "lucide-react";

export default function SettingsPage() {
    const [loading, setLoading] = useState(false);
    const [settings, setSettings] = useState({
        siteTitle: "Masakan Nusantara",
        heroTitle: "Cita Rasa Kuliner Indonesia",
        heroDescription: "Jelajahi kekayaan rasa dari Sabang sampai Merauke.",
        primaryColor: "#d97706",
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        const { data } = await supabase
            .from("site_settings")
            .select("value")
            .eq("key", "general")
            .single();

        if (data?.value) {
            setSettings(data.value);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from("site_settings")
            .upsert({ key: "general", value: settings });

        setLoading(false);

        if (error) {
            alert("Gagal menyimpan pengaturan: " + error.message);
        } else {
            alert("Pengaturan berhasil disimpan!");
        }
    };

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Pengaturan Website</h1>

                <form onSubmit={handleSave} className="space-y-8">
                    <div className="bg-card p-6 rounded-lg border border-border space-y-4">
                        <h2 className="text-xl font-bold border-b pb-2">Tampilan & Konten Utama</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1">Nama Website (Title)</label>
                            <input
                                name="siteTitle"
                                value={settings.siteTitle}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-background border border-border"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Judul Hero Section</label>
                            <input
                                name="heroTitle"
                                value={settings.heroTitle}
                                onChange={handleChange}
                                className="w-full p-2 rounded bg-background border border-border"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Deskripsi Hero Section</label>
                            <textarea
                                name="heroDescription"
                                value={settings.heroDescription}
                                onChange={handleChange}
                                rows={3}
                                className="w-full p-2 rounded bg-background border border-border"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Warna Utama (Hex)</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    name="primaryColor"
                                    value={settings.primaryColor}
                                    onChange={handleChange}
                                    className="h-10 w-20 p-1 rounded bg-background border border-border cursor-pointer"
                                />
                                <input
                                    type="text"
                                    name="primaryColor"
                                    value={settings.primaryColor}
                                    onChange={handleChange}
                                    className="flex-grow p-2 rounded bg-background border border-border uppercase"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={loading}>
                            <Save className="w-4 h-4 mr-2" />
                            {loading ? "Menyimpan..." : "Simpan Perubahan"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
