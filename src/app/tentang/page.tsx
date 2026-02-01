import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami | Masakan Nusantara",
    description: "Misi kami melestarikan kuliner Indonesia.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Tentang Kami</h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="lead text-xl text-center text-muted-foreground mb-8">
                    "Makanan adalah bahasa universal yang menyatukan kita semua, terutama dalam keragaman budaya Nusantara."
                </p>

                <p>
                    Selamat datang di <strong>Masakan Nusantara Ebook</strong>. Kami berdedikasi untuk mendokumentasikan dan menyajikan resep-resep terbaik dari Sabang sampai Merauke dalam format yang modern, elegan, dan mudah diakses.
                </p>

                <p>
                    Visi kami adalah menjadikan kuliner Indonesia tuan rumah di negeri sendiri dan mendunia. Melalui platform ini, kami berharap dapat menginspirasi generasi muda untuk kembali ke dapur dan melestarikan warisan rasa nenek moyang.
                </p>

                <h3>Komitmen Kualitas</h3>
                <p>
                    Setiap resep yang kami tampilkan telah melalui proses kurasi dan uji coba untuk memastikan rasa yang otentik.
                </p>
            </div>
        </main>
    );
}
