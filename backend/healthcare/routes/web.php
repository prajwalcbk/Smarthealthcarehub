<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PrescriptionDetailController;
use App\Http\Controllers\UserController;

use App\Http\Controllers\BasicHealthRecordController;
use App\Http\Controllers\ForumPostAnswerController;
use App\Http\Controllers\MedicationHistoryController;
use App\Http\Controllers\SignupController;
use App\Http\Controllers\VitalSignController;


use App\Http\Controllers\ForumsController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\SurgeryController;
use App\Http\Controllers\SupportCommentController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserRecordsShareSettingsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::middleware('auth.jwt')->get('/protected-route', function (Request $request) {
    return response()->json(['message' => 'This is a protected route']);
});


//middleware('auth.jwt')->
Route::get('/api/get/users', [UserController::class, 'getAll'])->name('users.get'); 
Route::middleware('auth.jwt')->get('/api/get/pharmacists', [UserController::class, 'getPharmacists'])->name('users.pharmacists');
Route::get('/api/get/doctors', [UserController::class, 'getDoctors'])->name('users.doctors');
Route::middleware('auth.jwt')->get('/api/get/doctor/profile', [UserController::class, 'getDoctorsProfile'])->name('users.getDoctorProfile');
Route::middleware('auth.jwt')->get('/api/get/pharmacist/profile', [UserController::class, 'getPharmacistsProfile'])->name('users.getPharmacistsProfile');


Route::middleware('auth.jwt')->get('/api/get/patient/profile', [UserController::class, 'getPatient'])->name('users.getPatient');



Route::middleware('auth.jwt')->post('/api/update/patient/profile', [UserController::class, 'updatepatient'])->name('users.updatepatient');
Route::middleware('auth.jwt')->post('/api/update/doctor/profile', [UserController::class, 'updatedoctor'])->name('users.updatedoctor');
Route::middleware('auth.jwt')->post('/api/update/pharmacist/profile', [UserController::class, 'updatepharmacist'])->name('users.updatepharmacist');



Route::middleware('auth.jwt')->get('/api/get/patients', [UserController::class, 'getPatients'])->name('users.patients');
Route::middleware('auth.jwt')->get('/api/get/healthadmins', [UserController::class, 'getHealthAdmins'])->name('users.healthadmins');


Route::middleware('auth.jwt')->get('/api/search/doctors', [UserController::class, 'searchDoctorsbyName'])->name('users.searchDoctorsbyName'); 
Route::middleware('auth.jwt')->get('/api/search/pharmacists', [UserController::class, 'searchPharmacistsbyName'])->name('users.searchPharmacistsbyName'); 
Route::middleware('auth.jwt')->get('/api/search/patients', [UserController::class, 'searchPatientsbyName'])->name('users.searchPatientsbyName'); 

Route::middleware('auth.jwt')->get('/api/get/user', [UserController::class, 'getUser'])->name('users.getUser'); 
Route::middleware('auth.jwt')->get('/api/verify/user/{id}', [UserController::class, 'verifyUser'])->name('users.verifyUser'); 
Route::middleware('auth.jwt')->get('/api/activate/user/{id}', [UserController::class, 'activateUser'])->name('users.activateUser'); 


Route::middleware('settings:enableSignup')->post('/api/create/user/doctor', [SignupController::class, 'doctor'])->name('doctor.create');
Route::middleware('settings:enableSignup')->post('/api/create/user/patient', [SignupController::class, 'patient']);
Route::middleware('settings:enableSignup')->post('/api/create/user/pharmacist', [SignupController::class, 'pharmacist'])->name('pharmacist.create');

Route::middleware('settings:enableLogin')->post('/api/auth/user/login', [LoginController::class, 'login'])->name('user.login');
Route::post('/api/auth/admin/user/login', [LoginController::class, 'adminlogin'])->name('admin.login');





Route::middleware(['settings:enableHealthForums', 'auth.jwt'])->post('/api/create/forum', [ForumsController::class, 'create']);
Route::middleware(['settings:enableHealthForums', 'auth.jwt'])->put('/api/update/forums/{postId}', [ForumsController::class, 'update']);
Route::middleware(['settings:enableHealthForums', 'auth.jwt'])->delete('/api/delete/forums/{postId}', [ForumsController::class, 'destroy']);
Route::middleware(['settings:enableHealthForums', 'auth.jwt'])->get('/api/get/forum/{postId}', [ForumsController::class, 'getForum']);
Route::middleware('settings:enableHealthForums')->get('/api/get/forums', [ForumsController::class, 'getAll']);
Route::middleware('settings:enableHealthForums')->get('/api/search/forums', [ForumsController::class, 'searchForums']);

Route::middleware(['settings:enableHealthForums', 'auth.jwt'])->post('/api/create/forum/answer', [ForumPostAnswerController::class, 'store']);
Route::middleware(['settings:enableHealthForums', 'auth.jwt'])->get('/api/get/forum/answers/{postId}', [ForumPostAnswerController::class, 'getForumAnswersForPost']);




Route::middleware(['settings:enableAppointments', 'auth.jwt'])->post('/api/create/appointment', [AppointmentController::class, 'store']);
Route::middleware(['settings:enableAppointments', 'auth.jwt'])->post('/api/update/appointment/{id}', [AppointmentController::class, 'update']);
Route::middleware(['settings:enableAppointments', 'auth.jwt'])->delete('/api/delete/appointment/{id}', [AppointmentController::class, 'destroy']);

Route::middleware(['settings:enableAppointments', 'auth.jwt'])->get('/api/get/appointments', [AppointmentController::class, 'getAll']);
Route::middleware(['settings:enableAppointments', 'auth.jwt'])->get('/api/get/user/appointments', [AppointmentController::class, 'getAppointmentsByPatient']);
Route::middleware(['settings:enableAppointments', 'auth.jwt'])->get('/api/get/doctor/completed/appointments', [AppointmentController::class, 'getCompletedAppointmentsByDoctor']);
Route::middleware(['settings:enableAppointments', 'auth.jwt'])->get('/api/get/doctor/upcoming/appointments', [AppointmentController::class, 'getUpcomingAppointmentsByDoctor']);


Route::middleware(['settings:enablePrescription', 'auth.jwt'])->get('/api/get/user/prescriptions', [PrescriptionController::class, 'getByUser'])->name('prescription.getByUser');
Route::middleware(['settings:enablePrescription', 'auth.jwt'])->get('/api/get/doctor/prescriptions', [PrescriptionController::class, 'getByDoctor'])->name('prescription.getByDoctor');
Route::middleware(['settings:enablePrescription', 'auth.jwt'])->get('/api/get/shared/prescriptions', [PrescriptionController::class, 'getShared'])->name('prescription.getShared');



Route::middleware(['settings:enablePrescription', 'auth.jwt'])->post('/api/create/prescription', [PrescriptionController::class, 'store'])->name('prescription.create');
Route::middleware(['settings:enablePrescription', 'auth.jwt'])->put('/api/update/prescription', [PrescriptionController::class, 'updateStatus'])->name('prescription.update');
Route::middleware(['settings:enablePrescription', 'auth.jwt'])->delete('/api/delete/prescription/{id}', [PrescriptionController::class, 'destroy'])->name('prescription.delete');


Route::middleware(['settings:enablePrescription', 'auth.jwt'])->put('/api/update/prescription/details', [PrescriptionDetailController::class, 'update'])->name('prescriptiondetails.update');
Route::middleware(['settings:enablePrescription', 'auth.jwt'])->get('/api/get/prescription/details/{id}', [PrescriptionDetailController::class, 'getByPrescriptionId'])->name('prescriptiondetails.getByPrescriptionId');
Route::middleware(['settings:enablePrescription', 'auth.jwt'])->delete('/api/delete/prescription/details/{id}', [PrescriptionDetailController::class, 'destroy'])->name('prescriptiondetails.delete');




Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->get('/api/get/shared/medical/history', [MedicationHistoryController::class, 'getMedicalHistorysharewithpatients'])->name('getMedicalHistorysharewithpatients.get');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->get('/api/get/shared/medical/allergies', [MedicationHistoryController::class, 'getAllergiesharewithpatients'])->name('getAllergiesharewithpatients.get');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->get('/api/get/shared/vital/records', [VitalSignController::class, 'getVitalSignsShareWithPatients'])->name('getVitalSignsShareWithPatients.get');


Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->post('/api/create/history/FamilyHealth', [MedicationHistoryController::class, 'storeFamilyHealthHistory'])->name('FamilyHealth.store');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->post('/api/create/history/Surgeries', [MedicationHistoryController::class, 'storeSurgeriesHistory'])->name('Surgeries.store');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->post('/api/create/history/pastillness', [MedicationHistoryController::class, 'storePastIllnessHistory'])->name('PastIllness.store');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->post('/api/create/history/allergies', [MedicationHistoryController::class, 'storeAllergiesHistory'])->name('Allergies.store');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->delete('/api/delete/medicalhistory/{id}', [MedicationHistoryController::class, 'destroy'])->name('medicalhistory.delete');


Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->get('/api/get/allergies/history', [MedicationHistoryController::class, 'getAllergiesByAuthenticatedUser'])->name('getAllergiesByAuthenticatedUser.get');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->get('/api/get/{type}/history', [MedicationHistoryController::class, 'getMedicationHistoryByAuthenticatedUserandType'])->name('getMedicationHistoryByAuthenticatedUserandType.get');


Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->get('/api/get/{id}/{type}/history', [MedicationHistoryController::class, 'getMedicationHistoryByUserandType'])->name('MedicationHistoryByUserandType.get');
Route::middleware(['settings:enableMedicationHistory', 'auth.jwt'])->get('/api/get/{id}/allergies/history', [MedicationHistoryController::class, 'getAllergiesByUser'])->name('AllergiesByUser.get');




Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->get('/api/get/exercise/healthrecords/', [ExerciseController::class, 'getByUser'])->name('exercise.getByUser');
Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->delete('/api/delete/exercise/healthrecord/{id}', [ExerciseController::class, 'destroy'])->name('exercise.delete');
Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->put('/api/update/exercise/healthrecord/{id}', [ExerciseController::class, 'update'])->name('exercise.update');
Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->post('/api/create/exercise/healthrecord', [ExerciseController::class, 'store'])->name('exercise.create');

Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->get('/api/get/basic/healthrecord', [BasicHealthRecordController::class, 'getByUser'])->name('basichealthrecord.getByUser');
Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->post('/api/update/basic/healthrecord', [BasicHealthRecordController::class, 'update'])->name('basichealthrecord.update');
Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->post('/api/create/basic/healthrecord', [BasicHealthRecordController::class, 'store'])->name('basichealthrecord.create');

Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->get('/api/get/vitalsigns', [VitalSignController::class, 'getByUser'])->name('vitals.get');
Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->delete('/api/delete/vitalsign/{id}', [VitalSignController::class, 'destroy'])->name('vitals.delete');
Route::middleware(['settings:enableHealthRecords', 'auth.jwt'])->post('/api/create/vitalsign', [VitalSignController::class, 'store'])->name('vitals.create');



Route::get('/api/get/facilities', [FacilityController::class, 'getAll'])->name('facilities.getAll');
Route::middleware('auth.jwt')->post('/api/create/facility', [FacilityController::class, 'store'])->name('facilities.create');
Route::middleware('auth.jwt')->get('/api/search/facility', [FacilityController::class, 'searchFacility'])->name('facilities.searchFacility');


Route::middleware(['settings:enableSupport', 'auth.jwt'])->get('/api/get/support/issues', [SupportController::class, 'getAll'])->name('support.getAll');
Route::middleware(['settings:enableSupport', 'auth.jwt'])->post('/api/create/support/issue', [SupportController::class, 'store'])->name('support.create');
Route::middleware(['settings:enableSupport', 'auth.jwt'])->get('/api/get/support/issue/{id}/{type}', [SupportController::class, 'getByUserType'])->name('support.getByUserType');
Route::middleware(['settings:enableSupport', 'auth.jwt'])->get('/api/get/support/{type}', [SupportController::class, 'getByType'])->name('support.getByType');
Route::middleware(['settings:enableSupport', 'auth.jwt'])->get('/api/get/support/issues/{id}', [SupportController::class, 'getByUser'])->name('support.getByUser');
Route::middleware(['settings:enableSupport', 'auth.jwt'])->get('/api/close/support/issues/{id}', [SupportController::class, 'closeSupport'])->name('support.closeSupport');

Route::middleware(['settings:enableSupport', 'auth.jwt'])->post('/api/create/support/comment', [SupportCommentController::class, 'store'])->name('supportcomment.create');
Route::middleware(['settings:enableSupport', 'auth.jwt'])->get('/api/get/support/comments/{id}', [SupportCommentController::class, 'getBySupportId'])->name('supportcomment.getBySupportId');



Route::middleware('auth.jwt')->put('/api/update/domain/settings', [SettingsController::class, 'update'])->name('settings.update');
Route::get('/api/get/domain/settings', [SettingsController::class, 'get'])->name('settings.get');



Route::middleware(['settings:enableMessenger', 'auth.jwt'])->post('/api/get/messages', [MessageController::class, 'getMessages']);
Route::middleware(['settings:enableMessenger', 'auth.jwt'])->post('/api/send/message', [MessageController::class, 'addMessage']);





Route::middleware('auth.jwt')->post('/api/create/share/records/', [UserRecordsShareSettingsController::class, 'createsharewithuser']);
Route::middleware('auth.jwt')->post('/api/delete/share/records/', [UserRecordsShareSettingsController::class, 'deletesharewithuser']);
Route::middleware('auth.jwt')->get('/api/get/share/users/', [UserRecordsShareSettingsController::class, 'getsharewithuser']);
Route::middleware('auth.jwt')->get('/api/get/share/patients/', [UserRecordsShareSettingsController::class, 'getsharewithpatients']);



Route::get('/api/get/doctor/{id}', [UserController::class, 'getDoctor'])->name('users.doctor');







