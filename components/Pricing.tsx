import * as motion from "motion/react-client";
import { plans } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl mb:text-5xl font-black font-heading mb-4 text-foreground">Affordable <span className="text-primary">Plans</span> for Everyone</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"> Choose the perfect plan that fits your budget and fitness goals. All
                        plans include our core benefits.</motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plans, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 24, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            key={plans.name}
                            className="group cursor-pointer relative"
                        >
                            <Card
                                className={`${plans.popular
                                    ? "border-primary border-2 ring-1 ring-primary/20"
                                    : ""
                                    }`}
                            >
                                {plans.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1">Most Popular</Badge>}
                                <CardHeader className="text-center p-8 pb-0">
                                    <h3 className="text-2xl font-bold font-heading text-foreground mb-2">{plans.name}</h3>
                                    <p className="text-muted-foreground mb-4">
                                        {plans.description}
                                    </p>
                                    <div>
                                        <span className="text-5xl font-black font-heading text-foreground">{plans.price}</span>
                                        <span className="text-muted-foreground ml-1">/{plans.period}</span>
                                    </div>

                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 mb-8">
                                        {plans.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="w-5 h-5 mr-3 text-green-500" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button className={`w-full py-3 text-lg font-semibold transition-colors duration-300 ${plans.popular
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-secondary text-primary-foreground hover:bg-primary"
                                        }`}>
                                        {plans.cta}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground">All plans include a 30-day money-back guarantee.</p>
                </motion.div>
            </div>
        </section >
    );
};

export default Pricing;