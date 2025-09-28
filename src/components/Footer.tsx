import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
              AvitoBot
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Первый парсер Авито с мгновенными уведомлениями в Telegram. 
              Будьте быстрее конкурентов и находите лучшие предложения раньше других.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="group">
                <MessageCircle className="w-4 h-4" />
                Telegram
              </Button>
              <Button size="sm" variant="outline" className="group">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  Как это работает
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  Тарифы
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  FAQ
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  Поддержка
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  Пользовательское соглашение
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  Политика конфиденциальности
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
                  Оферта
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>© 2024 AvitoBot. Все права защищены.</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Сделано с ❤️ для пользователей Авито
          </div>
        </div>
      </div>
    </footer>
  );
};