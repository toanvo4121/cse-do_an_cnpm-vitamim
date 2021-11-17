import mongoose from 'mongoose';

const mimSchema = mongoose.Schema({
	user:{
		type= mongoose.Schema.Types.ObjectId,
		required: true,
		ref = 'User',
	},
	mim_src:{
		type: String,
		required: true,
	},
	info:{
		caption:{
			type: String,
		},
		hashtag:[{
			type: String,
		}],
		catag:{
			type: String,
			required: true,
		},
		likes:{
			type: Number,
			default: 0,
		},
		dislikes:{
			type: Number,
			default: 0,
		},
	},
	comments:{
		numOfComments:{
			type: Number,
			default: 0,
		},
		cmts:[{
			type= mongoose.Schema.Types.ObjectId,
			required: true,
			ref= 'Comment',
		}],
	},
},
{
    timestamps: true,
})

const Mim = mongoose.model('Mim', mimSchema);

export default Mim