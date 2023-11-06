export default function AboutUsPage() {
  return (
    <main >
      <section className="p-32 flex flex-wrap justify-center gap-10 xl:justify-between mb-10">
        <div className="w-2/5">
          <h2 className="text-2xl mb-4"># Качество & Забота</h2>
          <p>...это то, на чем мы фокусируемся в нашей кофейне. Мы хотим, чтобы каждый гость почувствовал, что для нас важно именно их удовлетворение.</p>
          <p>Наша команда рада тому, что предлагает только высококачественный кофе. Мы чрезвычайно ценим каждого гостя и хотим, чтобы ваше посещение было приятным. Поэтому, когда решите заглянуть к нам, мы постараемся побаловать вас качественным кофе и внимательным обслуживанием. Ваше удовольствие и комфорт – наш главный приоритет! ☕😊</p>
        </div>
        <div className="flex justify-center gap-4">
          <img className="object-cover w-64 h-64 rounded-tl-full" src="/kava_flower.jpg" alt="кава ласка" />
          <img className="w-64 h-64 rounded-br-full" src="/kava_yana.jpg" alt="кава ласка" />
        </div>
      </section>
      <section className="p-32 flex flex-wrap justify-center gap-10 xl:justify-between bg-black text-white">
        <div className="w-2/5">
          <h2 className="text-2xl mb-4"># Подарки</h2>
          <p>...разве можем мы оставить наших любимых гостей без них?</p>
          <p className="mb-3 text-primary-color text-sm">{'(вопрос с подвохом😉)'}</p>
          <p className="mb-3">Конечно же НЕТ!</p> 
          <p className="mb-3">Мы каждый раз так сильно рады вас видеть, поэтому просто не можем себе позволить оставить вас без подарка.</p>
          <span className="text-[#BA2D0B] underline">КАЖДЫЙ 6 КОФЕ БЕСПЛАТНО!</span>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4">
          <img className="w-64" src="/kava_pro.jpg" alt="кава ласка" />
          <img className="w-64 rounded-tr-full" src="/kava_2.jpg" alt="кава ласка" />
          <img className="w-64 h-48 rounded-bl-full" src="/kava_3.jpg" alt="кава ласка" />
          <img className="w-64 h-48 object-cover" src="/kava_1.jpg" alt="кава ласка" />
        </div>
      </section>
      <section className="p-32 flex flex-wrap justify-center gap-10 xl:justify-between mb-10">
        <div className="w-2/5">
          <h2 className="text-2xl mb-4"># Доступность</h2>
          <p>...наши кофейни удобно расположены и работают <span className="underline">с 9:00 до 21:00</span>. Вы можете в любой момент порадовать себя вкуснейшим кофе. Проснуться утром с помощью бодрящего эспрессо, или после тяжёлого рабочего дня побаловать себя молочным коктейлем.</p>
        </div>
        <div className="flex justify-center gap-10">
          <a className="hover:scale-105 duration-300" href="https://yandex.by/maps/org/kava_laska/221744089680/?ll=30.317350%2C53.880130&z=16.74" target="_blank">
            <img className="object-cover w-64 h-64" src="/kava_esiti.jpg" alt="кава ласка" />
            Могилев, ул. Гагарина 79
          </a>
          <a className="hover:scale-105 duration-300" href="https://yandex.by/maps/org/kava_laska/182760430905/?indoorLevel=1&ll=30.363317%2C53.872205&z=16.74" target="_blank">
            <img className="object-cover w-64 h-64" src="/kava_gippo.jpg" alt="кава ласка" />
            Могилев, ул. Мовчанского 6
          </a>
        </div>
      </section>
    </main>
  )
}