import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "0₽",
    period: "навсегда",
    description: "Для знакомства с сервисом",
    features: [
      "1 поисковый запрос",
      "До 50 уведомлений в день", 
      "Базовые фильтры",
      "Поддержка в Telegram"
    ],
    buttonText: "Начать бесплатно",
    variant: "outline" as const
  },
  {
    name: "Продвинутый",
    price: "399₽",
    period: "в месяц",
    description: "Для активных пользователей",
    features: [
      "5 поисковых запросов",
      "Неограниченные уведомления",
      "Продвинутые фильтры",
      "Стоп-слова",
      "Приоритетная поддержка",
      "Статистика и аналитика"
    ],
    buttonText: "Выбрать план",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Профессиональный",
    price: "799₽", 
    period: "в месяц",
    description: "Для бизнеса и агентств",
    features: [
      "Неограниченные запросы",
      "Неограниченные уведомления",
      "Все доступные фильтры",
      "API доступ",
      "Персональный менеджер",
      "Интеграция с CRM",
      "Белый лейбл"
    ],
    buttonText: "Связаться с нами",
    variant: "outline" as const
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Выберите подходящий тариф
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Начните бесплатно или выберите план с расширенными возможностями
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.popular ? 'border-primary shadow-elegant scale-105' : 'border-border'} bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span className="text-sm font-medium">Популярный</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.variant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Нужен индивидуальный тариф? 
            <Button variant="link" className="px-2">Свяжитесь с нами</Button>
          </p>
        </div>
      </div>
    </section>
  );
};