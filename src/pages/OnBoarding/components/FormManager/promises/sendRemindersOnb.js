import { itemsService } from '../service'

export default (type, filters, items) => {
	return new Promise((resolve) => {
		itemsService.sendReminders(type, filters, items)
			.then(response => resolve({ success: true, data: response.data }))
	})
}