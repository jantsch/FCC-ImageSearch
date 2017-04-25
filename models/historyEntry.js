var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var historyEntrySchema   = new Schema({
  term: String,
  when: Date
}, { collection: 'Histories' });

module.exports = mongoose.model('History', historyEntrySchema);

