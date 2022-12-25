import { TypeConfiguration } from "./typeConfihuration.model"

export class LayoutConfig{
    MEMBERSHIP: {
        balanceLabel: string | undefined
        balanceSuffix: string | undefined
        balancePrefix: string | undefined
        backgroundFront: {
            type: string | undefined
            colorPrimary: string | undefined
            colorSecondary: string | undefined
        }
        backgroundBack: {
            type: string | undefined
            colorPrimary: string | undefined
            colorSecondary: string | undefined
            image: string | undefined
        }
        address: {
            streetAddress: string | undefined
            locality: string | undefined
            city: string | undefined
            state: string | undefined
            zipcode: string | undefined
            country: string | undefined
            latitude: number
            longitude: number
        }
    } | undefined
    EVENT: TypeConfiguration = new TypeConfiguration();
    COUPON: TypeConfiguration = new TypeConfiguration();
    VOUCHER: TypeConfiguration = new TypeConfiguration();
    DEFAULT: TypeConfiguration = new TypeConfiguration();
}
