import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["startDate", "endDate", "guest", "dateError"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  saveDate() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const newStartDate = this.startDateTarget.value
    const newEndDate = this.endDateTarget.value

    if (Date.parse(newStartDate) >= Date.parse(newEndDate)) {
      this.dateErrorTarget.innerHTML = 'End date should be greater than start date'
    } else {
      const url = window.location.pathname + '?' + 'start_date=' +
        this.startDateTarget.value + '&end_date=' + this.endDateTarget.value + '&guest_count=' + params.guest_count + '&listing_id=' + params.listing_id;
      window.location = url
    }
  }

  saveGuest() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const url = window.location.pathname + '?' + 'start_date=' +
      params.start_date + '&end_date=' + params.end_date + '&guest_count=' + this.guestTarget.value + '&listing_id=' + params.listing_id;
    window.location = url
  }

}