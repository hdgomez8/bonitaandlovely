import styled from 'styled-components'
import maquillaje from '../../assets/img/maquillaje.png'
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom:5%;
  margin-top:3%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  display:flex;
  padding:1rem;
  flex-direction:row;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin: 4rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  }
`;
const H1 = styled.h1`
font-weight:600;
margin-left:1%;
font-size:40px;
`

const Products = () => {
  const navigate = useNavigate()
  const goDetail = () => {
    let id = 1;
  navigate(`/detail/${id}`)
  }
  

return (
  <><H1>Descubre nuestros productos</H1><CardContainer>
   
    <Card>
  
<div class="flex font-sans">
  <div class="flex-none w-48 relative">
  <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />

  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        Classic Utility Jacket
      </h1>
      <div class="text-lg font-semibold text-slate-500">
        $110.00
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
    </Card>

    <Card>
  
  <div class="flex font-sans">
    <div class="flex-none w-48 relative">
    <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          Classic Utility Jacket
        </h1>
        <div class="text-lg font-semibold text-slate-500">
          $110.00
        </div>
        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          In stock
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div class="space-x-2 flex text-sm">
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xs" checked />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XS
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="s" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="m" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              M
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="l" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              L
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xl" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XL
            </div>
          </label>
        </div>
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Buy now
          </button>
          <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
            Add to bag
          </button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p class="text-sm text-slate-700">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
      </Card>

    <Card>


      <div class="flex font-sans">
        <div class="flex-none w-56 relative">
          <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto font-medium text-slate-900">
              Producto
            </h1>
            <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600">
              $39.00
            </div>
            <div class="text-sm font-medium text-slate-400">
              In stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

          </div>
          <div class="flex space-x-4 mb-5 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Buy now
          </button>
          <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
            Add to bag
          </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </Card>

      <Card>
  
  <div class="flex font-sans">
    <div class="flex-none w-48 relative">
    <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          Classic Utility Jacket
        </h1>
        <div class="text-lg font-semibold text-slate-500">
          $110.00
        </div>
        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          In stock
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div class="space-x-2 flex text-sm">
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xs" checked />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XS
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="s" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="m" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              M
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="l" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              L
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xl" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XL
            </div>
          </label>
        </div>
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Buy now
          </button>
          <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
            Add to bag
          </button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p class="text-sm text-slate-700">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
      </Card>

  </CardContainer></>
    )
}
export default Products;