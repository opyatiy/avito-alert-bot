import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Filter, Zap, Shield, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Мгновенные уведомления",
    description: "Получайте уведомления в Telegram через несколько секунд после публикации объявления"
  },
  {
    icon: Filter,
    title: "Умные фильтры",
    description: "Настройте точные критерии поиска: цена, регион, ключевые слова, категории"
  },
  {
    icon: Zap,
    title: "Быстрее конкурентов",
    description: "Будьте первыми! Наш бот работает быстрее ручного поиска и других сервисов"
  },
  {
    icon: Shield,
    title: "Безопасность данных",
    description: "Ваши данные защищены. Мы не сохраняем личную информацию и историю поиска"
  },
  {
    icon: Clock,
    title: "Работает 24/7",
    description: "Непрерывный мониторинг даже когда вы спите. Настройте расписание уведомлений"
  },
  {
    icon: Target,
    title: "Точность поиска",
    description: "Исключайте ненужные объявления с помощью стоп-слов и продвинутых фильтров"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают AvitoBot?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мощные функции для эффективного мониторинга объявлений на Авито
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-card bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};