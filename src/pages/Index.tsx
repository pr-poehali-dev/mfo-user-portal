import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [selectedRate, setSelectedRate] = useState("standard");

  const rates = {
    standard: { rate: 0.8, name: "Стандартный", color: "bg-blue-500" },
    premium: { rate: 0.6, name: "Премиум", color: "bg-green-500" },
    vip: { rate: 0.4, name: "VIP", color: "bg-purple-500" },
  };

  const calculatePayment = () => {
    const rate = rates[selectedRate as keyof typeof rates].rate / 100;
    const totalAmount = loanAmount + (loanAmount * rate * loanTerm) / 30;
    return Math.round(totalAmount);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">
                МитроФин
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#tariffs"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#faq"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="User" className="h-4 w-4 mr-2" />
              Личный кабинет
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Займы под
                <span className="text-blue-600"> 0.4% в день</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Быстрое одобрение за 15 минут. Без справок и поручителей. Деньги
                на карту в течение часа.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
                >
                  <Icon name="CreditCard" className="h-5 w-5 mr-2" />
                  Получить займ
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/4b04e9b8-dd94-490b-9786-267f058a8ed1.jpg"
                alt="Финансовые услуги"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Clock"
                  className="h-12 w-12 mx-auto mb-4 text-blue-600"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Быстрое одобрение
                </h3>
                <p className="text-slate-600">
                  Решение за 15 минут, деньги через час
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Shield"
                  className="h-12 w-12 mx-auto mb-4 text-green-600"
                />
                <h3 className="text-xl font-semibold mb-2">100% безопасно</h3>
                <p className="text-slate-600">Лицензия ЦБ РФ, защита данных</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Percent"
                  className="h-12 w-12 mx-auto mb-4 text-purple-600"
                />
                <h3 className="text-xl font-semibold mb-2">Низкие ставки</h3>
                <p className="text-slate-600">
                  От 0.4% в день для VIP клиентов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tariffs */}
      <section id="tariffs" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Тарифы и условия
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Калькулятор займа</h3>
              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Сумма займа
                    </label>
                    <Input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-sm text-slate-500 mt-1">
                      От 5 000 до 300 000 рублей
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Срок займа (дни)
                    </label>
                    <Input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-sm text-slate-500 mt-1">
                      От 7 до 180 дней
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Тарифный план
                    </label>
                    <Select
                      value={selectedRate}
                      onValueChange={setSelectedRate}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          Стандартный - 0.8% в день
                        </SelectItem>
                        <SelectItem value="premium">
                          Премиум - 0.6% в день
                        </SelectItem>
                        <SelectItem value="vip">VIP - 0.4% в день</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">К возврату:</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {calculatePayment().toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Тарифные планы</h3>
              <div className="space-y-4">
                {Object.entries(rates).map(([key, plan]) => (
                  <Card
                    key={key}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold">{plan.name}</h4>
                        <p className="text-slate-600">
                          Ставка: {plan.rate}% в день
                        </p>
                      </div>
                      <Badge className={`${plan.color} text-white`}>
                        {plan.rate}%
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <img
                  src="/img/19ee65dc-378c-43bc-adb8-f6a1662e5beb.jpg"
                  alt="Калькулятор займов"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Часто задаваемые вопросы
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Какие документы нужны для получения займа?
                </AccordionTrigger>
                <AccordionContent>
                  Для получения займа достаточно паспорта РФ. Никаких справок о
                  доходах и поручителей не требуется.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Как быстро поступают деньги на карту?
                </AccordionTrigger>
                <AccordionContent>
                  После одобрения заявки деньги поступают на карту в течение 1
                  часа в рабочее время банков.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Можно ли продлить займ?
                </AccordionTrigger>
                <AccordionContent>
                  Да, займ можно продлить до 3 раз. Для продления достаточно
                  оплатить проценты за текущий период.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Что если я просрочу платеж?
                </AccordionTrigger>
                <AccordionContent>
                  При просрочке начисляется неустойка 0.1% в день от суммы
                  задолженности. Мы всегда готовы найти решение.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              О компании МитроФин
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Мы работаем с 2018 года и помогли более 500 000 клиентов решить
              финансовые вопросы. Имеем лицензию Центрального Банка РФ и строго
              соблюдаем все требования законодательства.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500k+
                </div>
                <p className="text-slate-600">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  99.8%
                </div>
                <p className="text-slate-600">Процент одобрения</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  6 лет
                </div>
                <p className="text-slate-600">На рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Контакты
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-blue-600" />
                  <span>8 (800) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                  <span>info@mitrofin.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600" />
                  <span>Москва, ул. Финансовая, 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-blue-600" />
                  <span>Ежедневно с 8:00 до 22:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Личный кабинет</h3>
              <p className="text-slate-600 mb-6">
                Войдите в личный кабинет для управления займами, просмотра
                истории операций и подачи новых заявок.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="LogIn" className="h-4 w-4 mr-2" />
                  Войти в кабинет
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="UserPlus" className="h-4 w-4 mr-2" />
                  Зарегистрироваться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" className="h-6 w-6" />
                <span className="text-xl font-bold">МитроФин</span>
              </div>
              <p className="text-slate-400">
                Лицензированная микрофинансовая организация. Лицензия ЦБ РФ
                №2458.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Микрозаймы</li>
                <li>Рефинансирование</li>
                <li>Займы на карту</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-slate-400">
                <li>О компании</li>
                <li>Условия</li>
                <li>Документы</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Помощь</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 МитроФин. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
