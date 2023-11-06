import { Menu } from "@/components/Menu"
import { Syrups } from "@/components/Syrups"
import { productsItem } from "@/types/types"

export default function MenuPage() {

  const productsList: productsItem[] = [
    {name: 'Эспрессо', priceStandard: '2.8', priceDouble: '3.6'},
    {name: 'Американо', priceStandard: '3.0', priceDouble: '3.8'},
    {name: 'Латте', priceStandard: '4.2', priceDouble: '5.2'},
    {name: 'Капучино', priceStandard: '4.0', priceDouble: '5.0'},
    {name: 'Мокачино', priceStandard: '4.5', priceDouble: '5.5'},
    {name: 'Флэт Уайт', priceStandard: '4.5', priceDouble: "-"},
    {name: 'Раф', priceStandard: '5.0', priceDouble: '6.0'},
    {name: 'Какао', priceStandard: '3.0', priceDouble: '3.8'},
    {name: 'Чай пакетированный', priceStandard: '2.4', priceDouble: "-"},
    {name: 'Чай листовой', priceStandard: '3.6', priceDouble: "-"},
    {name: 'Молочный коктейль', priceStandard: '4.0', priceDouble: '5.0'},
  ]

  return (
    <main className="p-4 sm:p-10">
      <Menu productsList={productsList} />
      <div>
        <h3 className="text-center text-xl font-bold mb-10">Дополнительно:</h3>
        <table className="m-auto mb-10">
          <tbody>
            <tr>
              <td>
                <Syrups />
              </td>
              <td>
                0.6р.
              </td>
            </tr>
            <tr>
              <td className="w-96">
                Растительное молоко
              </td>
              <td>
                2р.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}