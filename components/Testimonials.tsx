import { testimonials } from "@/lib/constants";
import * as motion from "motion/react-client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
    const MAX_STARS = 5;

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl mb:text-5xl font-black font-heading mb-4 text-foreground">Success Stories</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">Here are some success stories from our clients</motion.p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {testimonials.map((t, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.2
                            }}
                            whileHover={{
                                scale: 1.03,
                                transition: {
                                    duration: 0.3,
                                    delay: 0,
                                }
                            }}
                            viewport={{ once: true }}
                            key={t.name} className="group">
                            <Card className="hover:shadow-2xl transition-shadow duration-300 h-full">
                                <CardContent className="p-8 text-center">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                            delay: index * 0.2
                                        }}
                                        viewport={{ once: true }}
                                        className="relative mb-6 h-30 w-24 mx-auto">
                                        <Image
                                            src={t.image}
                                            alt={t.name}
                                            fill
                                            className="rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 6 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            delay: index * 0.2
                                        }}
                                        viewport={{ once: true }}
                                        className="flex justify-center mb-4 gap-1">
                                        {Array.from({ length: MAX_STARS }).map((_, i) => {
                                            const isFilled = i < t.rating;
                                            return (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: "easeOut",
                                                        delay: index * 0.2 + i * 0.1
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="text-yellow-400 text-2xl"
                                                >
                                                    <Star
                                                        key={i}
                                                        className={
                                                            isFilled
                                                                ? "w-5 text-yellow-300"
                                                                : "w-5 text-neutral-300"
                                                        }
                                                        fill={isFilled ? "currentColor" : "none"}
                                                    />
                                                </motion.span>
                                            )
                                        })}
                                    </motion.div>

                                    <motion.blockquote
                                        initial={{ opacity: 0, y: 6 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            delay: index * 0.2
                                        }}
                                        viewport={{ once: true }}
                                        className="text-lg font-semibold font-heading text-foreground mb-4"
                                    >
                                        {t.story}
                                    </motion.blockquote>
                                    <motion.p
                                        initial={{ opacity: 0, y: 6 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            delay: index * 0.2
                                        }}
                                        viewport={{ once: true }}
                                        className="text-muted-foreground mb-4 leading-relaxed"
                                    >
                                        {t.details}
                                    </motion.p>
                                    <motion.cite
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeOut",
                                            delay: index * 0.2
                                        }}
                                        viewport={{ once: true }}
                                        className="font-bold text-primary italic"
                                    >
                                        {t.name}
                                    </motion.cite>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials;