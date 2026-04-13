import { Calendar, CheckCircle, TrendingUp, Users } from "lucide-react";
import * as motion from "motion/react-client";

export default function WhyChooseUs() {
    const features = [
        {
            icon: CheckCircle,
            title: "Certified Professional Trainers",
            description:
                "Work with certified fitness professionals who have years of experience and expertise.",
        },
        {
            icon: TrendingUp,
            title: "Personalized Workout & Diet Plans",
            description:
                "Get customized plans tailored to your specific goals, fitness level, and preferences.",
        },
        {
            icon: Calendar,
            title: "Flexible Schedules",
            description:
                "Choose from online and offline sessions that fit your busy lifestyle and schedule.",
        },
        {
            icon: Users,
            title: "Community Support & Progress Tracking",
            description:
                "Join a supportive community and track your progress with our advanced monitoring tools.",
        },
    ];
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl mb:text-5xl font-black font-heading mb-4 text-foreground">Why Choose <span className="text-primary">FitPro</span> Fitness</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">Here are some reasons why you should choose our fitness programs:</motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            className="group text-center"
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.12
                            }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{ once: true }}
                        >
                            <motion.div className="w-16 h-16 rounded-full bg-primary/20 inline-flex text-primary items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-8"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: index * 0.18
                                }}
                                viewport={{ once: true }}
                            >
                                <feature.icon className="w-8 h-8" />
                            </motion.div>
                            <motion.h3 className="text-xl font-bold font-heading mb-4 text-foreground"
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.14
                                }}
                                viewport={{ once: true }}
                            >{feature.title}</motion.h3>
                            <motion.p className="text-muted-foreground leading-relaxed"
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.20
                                }}
                                viewport={{ once: true }}
                            >{feature.description}</motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}