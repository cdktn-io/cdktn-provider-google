# `contactCenterInsightsQaQuestion` Submodule <a name="`contactCenterInsightsQaQuestion` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaQuestion <a name="ContactCenterInsightsQaQuestion" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question google_contact_center_insights_qa_question}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestion;

ContactCenterInsightsQaQuestion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .qaScorecard(java.lang.String)
    .revision(java.lang.String)
//  .abbreviation(java.lang.String)
//  .answerChoices(IResolvable|java.util.List<ContactCenterInsightsQaQuestionAnswerChoices>)
//  .answerInstructions(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .metrics(ContactCenterInsightsQaQuestionMetrics)
//  .order(java.lang.Number)
//  .predefinedQuestionConfig(ContactCenterInsightsQaQuestionPredefinedQuestionConfig)
//  .project(java.lang.String)
//  .qaQuestionDataOptions(ContactCenterInsightsQaQuestionQaQuestionDataOptions)
//  .questionBody(java.lang.String)
//  .questionType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ContactCenterInsightsQaQuestionTimeouts)
//  .tuningMetadata(ContactCenterInsightsQaQuestionTuningMetadata)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.qaScorecard">qaScorecard</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.revision">revision</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.abbreviation">abbreviation</a></code> | <code>java.lang.String</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.answerChoices">answerChoices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>></code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.answerInstructions">answerInstructions</a></code> | <code>java.lang.String</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.order">order</a></code> | <code>java.lang.Number</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.questionBody">questionBody</a></code> | <code>java.lang.String</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.questionType">questionType</a></code> | <code>java.lang.String</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#location ContactCenterInsightsQaQuestion#location}

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.qaScorecard"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#qa_scorecard ContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.revision"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#revision ContactCenterInsightsQaQuestion#revision}

---

##### `abbreviation`<sup>Optional</sup> <a name="abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.abbreviation"></a>

- *Type:* java.lang.String

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#abbreviation ContactCenterInsightsQaQuestion#abbreviation}

---

##### `answerChoices`<sup>Optional</sup> <a name="answerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.answerChoices"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>>

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#answer_choices ContactCenterInsightsQaQuestion#answer_choices}

---

##### `answerInstructions`<sup>Optional</sup> <a name="answerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.answerInstructions"></a>

- *Type:* java.lang.String

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#answer_instructions ContactCenterInsightsQaQuestion#answer_instructions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#deletion_policy ContactCenterInsightsQaQuestion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.metrics"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#metrics ContactCenterInsightsQaQuestion#metrics}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.order"></a>

- *Type:* java.lang.Number

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#order ContactCenterInsightsQaQuestion#order}

---

##### `predefinedQuestionConfig`<sup>Optional</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.predefinedQuestionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#predefined_question_config ContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}.

---

##### `qaQuestionDataOptions`<sup>Optional</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.qaQuestionDataOptions"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#qa_question_data_options ContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `questionBody`<sup>Optional</sup> <a name="questionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.questionBody"></a>

- *Type:* java.lang.String

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#question_body ContactCenterInsightsQaQuestion#question_body}

---

##### `questionType`<sup>Optional</sup> <a name="questionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.questionType"></a>

- *Type:* java.lang.String

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#question_type ContactCenterInsightsQaQuestion#question_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#tags ContactCenterInsightsQaQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#timeouts ContactCenterInsightsQaQuestion#timeouts}

---

##### `tuningMetadata`<sup>Optional</sup> <a name="tuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.tuningMetadata"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#tuning_metadata ContactCenterInsightsQaQuestion#tuning_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices">putAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig">putPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions">putQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata">putTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation">resetAbbreviation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices">resetAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions">resetAnswerInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig">resetPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions">resetQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody">resetQuestionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType">resetQuestionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata">resetTuningMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnswerChoices` <a name="putAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices"></a>

```java
public void putAnswerChoices(IResolvable|java.util.List<ContactCenterInsightsQaQuestionAnswerChoices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>>

---

##### `putMetrics` <a name="putMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics"></a>

```java
public void putMetrics(ContactCenterInsightsQaQuestionMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `putPredefinedQuestionConfig` <a name="putPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig"></a>

```java
public void putPredefinedQuestionConfig(ContactCenterInsightsQaQuestionPredefinedQuestionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `putQaQuestionDataOptions` <a name="putQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions"></a>

```java
public void putQaQuestionDataOptions(ContactCenterInsightsQaQuestionQaQuestionDataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts"></a>

```java
public void putTimeouts(ContactCenterInsightsQaQuestionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---

##### `putTuningMetadata` <a name="putTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata"></a>

```java
public void putTuningMetadata(ContactCenterInsightsQaQuestionTuningMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `resetAbbreviation` <a name="resetAbbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation"></a>

```java
public void resetAbbreviation()
```

##### `resetAnswerChoices` <a name="resetAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices"></a>

```java
public void resetAnswerChoices()
```

##### `resetAnswerInstructions` <a name="resetAnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions"></a>

```java
public void resetAnswerInstructions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId"></a>

```java
public void resetId()
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPredefinedQuestionConfig` <a name="resetPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig"></a>

```java
public void resetPredefinedQuestionConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject"></a>

```java
public void resetProject()
```

##### `resetQaQuestionDataOptions` <a name="resetQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions"></a>

```java
public void resetQaQuestionDataOptions()
```

##### `resetQuestionBody` <a name="resetQuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody"></a>

```java
public void resetQuestionBody()
```

##### `resetQuestionType` <a name="resetQuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType"></a>

```java
public void resetQuestionType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTuningMetadata` <a name="resetTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata"></a>

```java
public void resetTuningMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestion;

ContactCenterInsightsQaQuestion.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestion;

ContactCenterInsightsQaQuestion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestion;

ContactCenterInsightsQaQuestion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestion;

ContactCenterInsightsQaQuestion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContactCenterInsightsQaQuestion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContactCenterInsightsQaQuestion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContactCenterInsightsQaQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices">answerChoices</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput">abbreviationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput">answerChoicesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput">answerInstructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput">metricsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput">predefinedQuestionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput">qaQuestionDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput">qaScorecardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput">questionBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput">questionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput">tuningMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation">abbreviation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions">answerInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard">qaScorecard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody">questionBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType">questionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `answerChoices`<sup>Required</sup> <a name="answerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices"></a>

```java
public ContactCenterInsightsQaQuestionAnswerChoicesList getAnswerChoices();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics"></a>

```java
public ContactCenterInsightsQaQuestionMetricsOutputReference getMetrics();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `predefinedQuestionConfig`<sup>Required</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig"></a>

```java
public ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference getPredefinedQuestionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a>

---

##### `qaQuestionDataOptions`<sup>Required</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference getQaQuestionDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts"></a>

```java
public ContactCenterInsightsQaQuestionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a>

---

##### `tuningMetadata`<sup>Required</sup> <a name="tuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata"></a>

```java
public ContactCenterInsightsQaQuestionTuningMetadataOutputReference getTuningMetadata();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `abbreviationInput`<sup>Optional</sup> <a name="abbreviationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput"></a>

```java
public java.lang.String getAbbreviationInput();
```

- *Type:* java.lang.String

---

##### `answerChoicesInput`<sup>Optional</sup> <a name="answerChoicesInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput"></a>

```java
public IResolvable|java.util.List<ContactCenterInsightsQaQuestionAnswerChoices> getAnswerChoicesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>>

---

##### `answerInstructionsInput`<sup>Optional</sup> <a name="answerInstructionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput"></a>

```java
public java.lang.String getAnswerInstructionsInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput"></a>

```java
public ContactCenterInsightsQaQuestionMetrics getMetricsInput();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `predefinedQuestionConfigInput`<sup>Optional</sup> <a name="predefinedQuestionConfigInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput"></a>

```java
public ContactCenterInsightsQaQuestionPredefinedQuestionConfig getPredefinedQuestionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `qaQuestionDataOptionsInput`<sup>Optional</sup> <a name="qaQuestionDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptions getQaQuestionDataOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `qaScorecardInput`<sup>Optional</sup> <a name="qaScorecardInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput"></a>

```java
public java.lang.String getQaScorecardInput();
```

- *Type:* java.lang.String

---

##### `questionBodyInput`<sup>Optional</sup> <a name="questionBodyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput"></a>

```java
public java.lang.String getQuestionBodyInput();
```

- *Type:* java.lang.String

---

##### `questionTypeInput`<sup>Optional</sup> <a name="questionTypeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput"></a>

```java
public java.lang.String getQuestionTypeInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput"></a>

```java
public IResolvable|ContactCenterInsightsQaQuestionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---

##### `tuningMetadataInput`<sup>Optional</sup> <a name="tuningMetadataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput"></a>

```java
public ContactCenterInsightsQaQuestionTuningMetadata getTuningMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `abbreviation`<sup>Required</sup> <a name="abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation"></a>

```java
public java.lang.String getAbbreviation();
```

- *Type:* java.lang.String

---

##### `answerInstructions`<sup>Required</sup> <a name="answerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions"></a>

```java
public java.lang.String getAnswerInstructions();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard"></a>

```java
public java.lang.String getQaScorecard();
```

- *Type:* java.lang.String

---

##### `questionBody`<sup>Required</sup> <a name="questionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody"></a>

```java
public java.lang.String getQuestionBody();
```

- *Type:* java.lang.String

---

##### `questionType`<sup>Required</sup> <a name="questionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType"></a>

```java
public java.lang.String getQuestionType();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaQuestionAnswerChoices <a name="ContactCenterInsightsQaQuestionAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionAnswerChoices;

ContactCenterInsightsQaQuestionAnswerChoices.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .naValue(java.lang.Boolean|IResolvable)
//  .numValue(java.lang.Number)
//  .score(java.lang.Number)
//  .strValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key">key</a></code> | <code>java.lang.String</code> | A short string used as an identifier. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue">naValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value of "Not Applicable (N/A)". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue">numValue</a></code> | <code>java.lang.Number</code> | Numerical value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score">score</a></code> | <code>java.lang.Number</code> | Numerical score of the answer, used for generating the overall score of a QaScorecardResult. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue">strValue</a></code> | <code>java.lang.String</code> | String value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#bool_value ContactCenterInsightsQaQuestion#bool_value}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A short string used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#key ContactCenterInsightsQaQuestion#key}

---

##### `naValue`<sup>Optional</sup> <a name="naValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue"></a>

```java
public java.lang.Boolean|IResolvable getNaValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value of "Not Applicable (N/A)".

If provided, this field may only
be set to 'true'. If a question receives this answer, it will be
excluded from any score calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#na_value ContactCenterInsightsQaQuestion#na_value}

---

##### `numValue`<sup>Optional</sup> <a name="numValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue"></a>

```java
public java.lang.Number getNumValue();
```

- *Type:* java.lang.Number

Numerical value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#num_value ContactCenterInsightsQaQuestion#num_value}

---

##### `score`<sup>Optional</sup> <a name="score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

Numerical score of the answer, used for generating the overall score of a QaScorecardResult.

If the answer uses na_value, this field is unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#score ContactCenterInsightsQaQuestion#score}

---

##### `strValue`<sup>Optional</sup> <a name="strValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue"></a>

```java
public java.lang.String getStrValue();
```

- *Type:* java.lang.String

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#str_value ContactCenterInsightsQaQuestion#str_value}

---

### ContactCenterInsightsQaQuestionConfig <a name="ContactCenterInsightsQaQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionConfig;

ContactCenterInsightsQaQuestionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .qaScorecard(java.lang.String)
    .revision(java.lang.String)
//  .abbreviation(java.lang.String)
//  .answerChoices(IResolvable|java.util.List<ContactCenterInsightsQaQuestionAnswerChoices>)
//  .answerInstructions(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .metrics(ContactCenterInsightsQaQuestionMetrics)
//  .order(java.lang.Number)
//  .predefinedQuestionConfig(ContactCenterInsightsQaQuestionPredefinedQuestionConfig)
//  .project(java.lang.String)
//  .qaQuestionDataOptions(ContactCenterInsightsQaQuestionQaQuestionDataOptions)
//  .questionBody(java.lang.String)
//  .questionType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ContactCenterInsightsQaQuestionTimeouts)
//  .tuningMetadata(ContactCenterInsightsQaQuestionTuningMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard">qaScorecard</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision">revision</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation">abbreviation</a></code> | <code>java.lang.String</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices">answerChoices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>></code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions">answerInstructions</a></code> | <code>java.lang.String</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order">order</a></code> | <code>java.lang.Number</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody">questionBody</a></code> | <code>java.lang.String</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType">questionType</a></code> | <code>java.lang.String</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#location ContactCenterInsightsQaQuestion#location}

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard"></a>

```java
public java.lang.String getQaScorecard();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#qa_scorecard ContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#revision ContactCenterInsightsQaQuestion#revision}

---

##### `abbreviation`<sup>Optional</sup> <a name="abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation"></a>

```java
public java.lang.String getAbbreviation();
```

- *Type:* java.lang.String

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#abbreviation ContactCenterInsightsQaQuestion#abbreviation}

---

##### `answerChoices`<sup>Optional</sup> <a name="answerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices"></a>

```java
public IResolvable|java.util.List<ContactCenterInsightsQaQuestionAnswerChoices> getAnswerChoices();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>>

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#answer_choices ContactCenterInsightsQaQuestion#answer_choices}

---

##### `answerInstructions`<sup>Optional</sup> <a name="answerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions"></a>

```java
public java.lang.String getAnswerInstructions();
```

- *Type:* java.lang.String

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#answer_instructions ContactCenterInsightsQaQuestion#answer_instructions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#deletion_policy ContactCenterInsightsQaQuestion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics"></a>

```java
public ContactCenterInsightsQaQuestionMetrics getMetrics();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#metrics ContactCenterInsightsQaQuestion#metrics}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#order ContactCenterInsightsQaQuestion#order}

---

##### `predefinedQuestionConfig`<sup>Optional</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig"></a>

```java
public ContactCenterInsightsQaQuestionPredefinedQuestionConfig getPredefinedQuestionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#predefined_question_config ContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}.

---

##### `qaQuestionDataOptions`<sup>Optional</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptions getQaQuestionDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#qa_question_data_options ContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `questionBody`<sup>Optional</sup> <a name="questionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody"></a>

```java
public java.lang.String getQuestionBody();
```

- *Type:* java.lang.String

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#question_body ContactCenterInsightsQaQuestion#question_body}

---

##### `questionType`<sup>Optional</sup> <a name="questionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType"></a>

```java
public java.lang.String getQuestionType();
```

- *Type:* java.lang.String

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#question_type ContactCenterInsightsQaQuestion#question_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#tags ContactCenterInsightsQaQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts"></a>

```java
public ContactCenterInsightsQaQuestionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#timeouts ContactCenterInsightsQaQuestion#timeouts}

---

##### `tuningMetadata`<sup>Optional</sup> <a name="tuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata"></a>

```java
public ContactCenterInsightsQaQuestionTuningMetadata getTuningMetadata();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#tuning_metadata ContactCenterInsightsQaQuestion#tuning_metadata}

---

### ContactCenterInsightsQaQuestionMetrics <a name="ContactCenterInsightsQaQuestionMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionMetrics;

ContactCenterInsightsQaQuestionMetrics.builder()
    .build();
```


### ContactCenterInsightsQaQuestionPredefinedQuestionConfig <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionPredefinedQuestionConfig;

ContactCenterInsightsQaQuestionPredefinedQuestionConfig.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#type ContactCenterInsightsQaQuestion#type}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionQaQuestionDataOptions;

ContactCenterInsightsQaQuestionQaQuestionDataOptions.builder()
//  .conversationDataOptions(ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions">conversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | conversation_data_options block. |

---

##### `conversationDataOptions`<sup>Optional</sup> <a name="conversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions getConversationDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#conversation_data_options ContactCenterInsightsQaQuestion#conversation_data_options}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions;

ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.builder()
//  .includeDialogflowInteractionData(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData">includeDialogflowInteractionData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to include the per turn Dialogflow interaction data in conversation transcript. |

---

##### `includeDialogflowInteractionData`<sup>Optional</sup> <a name="includeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeDialogflowInteractionData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#include_dialogflow_interaction_data ContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

### ContactCenterInsightsQaQuestionTimeouts <a name="ContactCenterInsightsQaQuestionTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionTimeouts;

ContactCenterInsightsQaQuestionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}.

---

### ContactCenterInsightsQaQuestionTuningMetadata <a name="ContactCenterInsightsQaQuestionTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionTuningMetadata;

ContactCenterInsightsQaQuestionTuningMetadata.builder()
//  .datasetValidationWarnings(java.util.List<java.lang.String>)
//  .totalValidLabelCount(java.lang.String)
//  .tuningError(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings">datasetValidationWarnings</a></code> | <code>java.util.List<java.lang.String></code> | A list of any applicable data validation warnings about the question's feedback labels. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount">totalValidLabelCount</a></code> | <code>java.lang.String</code> | Total number of valid labels provided for the question at the time of tuining. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError">tuningError</a></code> | <code>java.lang.String</code> | Error status of the tuning operation for the question. Will only be set if the tuning operation failed. |

---

##### `datasetValidationWarnings`<sup>Optional</sup> <a name="datasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings"></a>

```java
public java.util.List<java.lang.String> getDatasetValidationWarnings();
```

- *Type:* java.util.List<java.lang.String>

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#dataset_validation_warnings ContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

##### `totalValidLabelCount`<sup>Optional</sup> <a name="totalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount"></a>

```java
public java.lang.String getTotalValidLabelCount();
```

- *Type:* java.lang.String

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#total_valid_label_count ContactCenterInsightsQaQuestion#total_valid_label_count}

---

##### `tuningError`<sup>Optional</sup> <a name="tuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError"></a>

```java
public java.lang.String getTuningError();
```

- *Type:* java.lang.String

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_question#tuning_error ContactCenterInsightsQaQuestion#tuning_error}

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaQuestionAnswerChoicesList <a name="ContactCenterInsightsQaQuestionAnswerChoicesList" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionAnswerChoicesList;

new ContactCenterInsightsQaQuestionAnswerChoicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get"></a>

```java
public ContactCenterInsightsQaQuestionAnswerChoicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ContactCenterInsightsQaQuestionAnswerChoices> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>>

---


### ContactCenterInsightsQaQuestionAnswerChoicesOutputReference <a name="ContactCenterInsightsQaQuestionAnswerChoicesOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference;

new ContactCenterInsightsQaQuestionAnswerChoicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue">resetNaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue">resetNumValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore">resetScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue">resetStrValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetNaValue` <a name="resetNaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue"></a>

```java
public void resetNaValue()
```

##### `resetNumValue` <a name="resetNumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue"></a>

```java
public void resetNumValue()
```

##### `resetScore` <a name="resetScore" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore"></a>

```java
public void resetScore()
```

##### `resetStrValue` <a name="resetStrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue"></a>

```java
public void resetStrValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput">naValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput">numValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput">scoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput">strValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue">naValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue">numValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score">score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue">strValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `naValueInput`<sup>Optional</sup> <a name="naValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput"></a>

```java
public java.lang.Boolean|IResolvable getNaValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numValueInput`<sup>Optional</sup> <a name="numValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput"></a>

```java
public java.lang.Number getNumValueInput();
```

- *Type:* java.lang.Number

---

##### `scoreInput`<sup>Optional</sup> <a name="scoreInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput"></a>

```java
public java.lang.Number getScoreInput();
```

- *Type:* java.lang.Number

---

##### `strValueInput`<sup>Optional</sup> <a name="strValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput"></a>

```java
public java.lang.String getStrValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `naValue`<sup>Required</sup> <a name="naValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue"></a>

```java
public java.lang.Boolean|IResolvable getNaValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numValue`<sup>Required</sup> <a name="numValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue"></a>

```java
public java.lang.Number getNumValue();
```

- *Type:* java.lang.Number

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

---

##### `strValue`<sup>Required</sup> <a name="strValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue"></a>

```java
public java.lang.String getStrValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue"></a>

```java
public IResolvable|ContactCenterInsightsQaQuestionAnswerChoices getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>

---


### ContactCenterInsightsQaQuestionMetricsOutputReference <a name="ContactCenterInsightsQaQuestionMetricsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionMetricsOutputReference;

new ContactCenterInsightsQaQuestionMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy">accuracy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy"></a>

```java
public java.lang.Number getAccuracy();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsQaQuestionMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---


### ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference;

new ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsQaQuestionPredefinedQuestionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference;

new ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData">resetIncludeDialogflowInteractionData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeDialogflowInteractionData` <a name="resetIncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData"></a>

```java
public void resetIncludeDialogflowInteractionData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput">includeDialogflowInteractionDataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData">includeDialogflowInteractionData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeDialogflowInteractionDataInput`<sup>Optional</sup> <a name="includeDialogflowInteractionDataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeDialogflowInteractionDataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeDialogflowInteractionData`<sup>Required</sup> <a name="includeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeDialogflowInteractionData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference;

new ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions">putConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions">resetConversationDataOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConversationDataOptions` <a name="putConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions"></a>

```java
public void putConversationDataOptions(ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `resetConversationDataOptions` <a name="resetConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions"></a>

```java
public void resetConversationDataOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions">conversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput">conversationDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationDataOptions`<sup>Required</sup> <a name="conversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference getConversationDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a>

---

##### `conversationDataOptionsInput`<sup>Optional</sup> <a name="conversationDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions getConversationDataOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsQaQuestionQaQuestionDataOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---


### ContactCenterInsightsQaQuestionTimeoutsOutputReference <a name="ContactCenterInsightsQaQuestionTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionTimeoutsOutputReference;

new ContactCenterInsightsQaQuestionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ContactCenterInsightsQaQuestionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---


### ContactCenterInsightsQaQuestionTuningMetadataOutputReference <a name="ContactCenterInsightsQaQuestionTuningMetadataOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.contact_center_insights_qa_question.ContactCenterInsightsQaQuestionTuningMetadataOutputReference;

new ContactCenterInsightsQaQuestionTuningMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings">resetDatasetValidationWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount">resetTotalValidLabelCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError">resetTuningError</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetValidationWarnings` <a name="resetDatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings"></a>

```java
public void resetDatasetValidationWarnings()
```

##### `resetTotalValidLabelCount` <a name="resetTotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount"></a>

```java
public void resetTotalValidLabelCount()
```

##### `resetTuningError` <a name="resetTuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError"></a>

```java
public void resetTuningError()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput">datasetValidationWarningsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput">totalValidLabelCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput">tuningErrorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings">datasetValidationWarnings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount">totalValidLabelCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError">tuningError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetValidationWarningsInput`<sup>Optional</sup> <a name="datasetValidationWarningsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput"></a>

```java
public java.util.List<java.lang.String> getDatasetValidationWarningsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalValidLabelCountInput`<sup>Optional</sup> <a name="totalValidLabelCountInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput"></a>

```java
public java.lang.String getTotalValidLabelCountInput();
```

- *Type:* java.lang.String

---

##### `tuningErrorInput`<sup>Optional</sup> <a name="tuningErrorInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput"></a>

```java
public java.lang.String getTuningErrorInput();
```

- *Type:* java.lang.String

---

##### `datasetValidationWarnings`<sup>Required</sup> <a name="datasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings"></a>

```java
public java.util.List<java.lang.String> getDatasetValidationWarnings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalValidLabelCount`<sup>Required</sup> <a name="totalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount"></a>

```java
public java.lang.String getTotalValidLabelCount();
```

- *Type:* java.lang.String

---

##### `tuningError`<sup>Required</sup> <a name="tuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError"></a>

```java
public java.lang.String getTuningError();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue"></a>

```java
public ContactCenterInsightsQaQuestionTuningMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---



