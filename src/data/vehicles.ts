type TVehiclesData = {
	name: string;
	image: string;
	pricePerKm: number;
	seats: number;
	ac: boolean;
	fuel: string;
	features: string[];
}[];

export const VehiclesData: TVehiclesData = [
	{
		name: 'Innova crysta',
		image: '/images/innova.png',
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		name: 'Ertiga',
		image: '/images/ertiga.png',
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		name: 'Swift Dzire',
		image: '/images/swiftDzire.png',
		pricePerKm: 10,
		seats: 4,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		name: 'Innova crysta',
		image: '/images/innova.png',
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		name: 'Ertiga',
		image: '/images/ertiga.png',
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		name: 'Swift Dzire',
		image: '/images/swiftDzire.png',
		pricePerKm: 10,
		seats: 4,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	}
];
