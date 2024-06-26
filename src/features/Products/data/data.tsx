

import type { TabsProps } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { ProductListActive } from '../components/ProductListActive'
import { ProductListInActive } from '../components/ProductListInActive'

export const items: TabsProps['items'] = [
  // {
  //   key: uuidv4(),
  //   label: 'Tất cả sản phẩm',
  //   children: <ProductList />
  // },
  {
    key: uuidv4(),
    label: 'Các sản phẩm đang hoạt động',
    children: <ProductListActive />
  },
  {
    key: uuidv4(),
    label: 'Các sản phẩm đã ẩn',
    children: <ProductListInActive />
  }
  // {
  //   key: uuidv4(),
  //   label: 'Các sản phẩm đã xóa',
  //   children: <ProductListDelete />
  // }
]