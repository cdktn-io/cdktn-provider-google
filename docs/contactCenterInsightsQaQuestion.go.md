# `contactCenterInsightsQaQuestion` Submodule <a name="`contactCenterInsightsQaQuestion` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaQuestion <a name="ContactCenterInsightsQaQuestion" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question google_contact_center_insights_qa_question}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestion(scope Construct, id *string, config ContactCenterInsightsQaQuestionConfig) ContactCenterInsightsQaQuestion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig">ContactCenterInsightsQaQuestionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig">ContactCenterInsightsQaQuestionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices">PutAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig">PutPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions">PutQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata">PutTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation">ResetAbbreviation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices">ResetAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions">ResetAnswerInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig">ResetPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions">ResetQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody">ResetQuestionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType">ResetQuestionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata">ResetTuningMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnswerChoices` <a name="PutAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices"></a>

```go
func PutAnswerChoices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics"></a>

```go
func PutMetrics(value ContactCenterInsightsQaQuestionMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `PutPredefinedQuestionConfig` <a name="PutPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig"></a>

```go
func PutPredefinedQuestionConfig(value ContactCenterInsightsQaQuestionPredefinedQuestionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `PutQaQuestionDataOptions` <a name="PutQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions"></a>

```go
func PutQaQuestionDataOptions(value ContactCenterInsightsQaQuestionQaQuestionDataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts"></a>

```go
func PutTimeouts(value ContactCenterInsightsQaQuestionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---

##### `PutTuningMetadata` <a name="PutTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata"></a>

```go
func PutTuningMetadata(value ContactCenterInsightsQaQuestionTuningMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `ResetAbbreviation` <a name="ResetAbbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation"></a>

```go
func ResetAbbreviation()
```

##### `ResetAnswerChoices` <a name="ResetAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices"></a>

```go
func ResetAnswerChoices()
```

##### `ResetAnswerInstructions` <a name="ResetAnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions"></a>

```go
func ResetAnswerInstructions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId"></a>

```go
func ResetId()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics"></a>

```go
func ResetMetrics()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPredefinedQuestionConfig` <a name="ResetPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig"></a>

```go
func ResetPredefinedQuestionConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQaQuestionDataOptions` <a name="ResetQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions"></a>

```go
func ResetQaQuestionDataOptions()
```

##### `ResetQuestionBody` <a name="ResetQuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody"></a>

```go
func ResetQuestionBody()
```

##### `ResetQuestionType` <a name="ResetQuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType"></a>

```go
func ResetQuestionType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTuningMetadata` <a name="ResetTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata"></a>

```go
func ResetTuningMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestion_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContactCenterInsightsQaQuestion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContactCenterInsightsQaQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices">AnswerChoices</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig">PredefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions">QaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata">TuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput">AbbreviationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput">AnswerChoicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput">AnswerInstructionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput">MetricsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput">PredefinedQuestionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput">QaQuestionDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput">QaScorecardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput">QuestionBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput">QuestionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput">TuningMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation">Abbreviation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions">AnswerInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard">QaScorecard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody">QuestionBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType">QuestionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnswerChoices`<sup>Required</sup> <a name="AnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices"></a>

```go
func AnswerChoices() ContactCenterInsightsQaQuestionAnswerChoicesList
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics"></a>

```go
func Metrics() ContactCenterInsightsQaQuestionMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PredefinedQuestionConfig`<sup>Required</sup> <a name="PredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig"></a>

```go
func PredefinedQuestionConfig() ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a>

---

##### `QaQuestionDataOptions`<sup>Required</sup> <a name="QaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions"></a>

```go
func QaQuestionDataOptions() ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts"></a>

```go
func Timeouts() ContactCenterInsightsQaQuestionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a>

---

##### `TuningMetadata`<sup>Required</sup> <a name="TuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata"></a>

```go
func TuningMetadata() ContactCenterInsightsQaQuestionTuningMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AbbreviationInput`<sup>Optional</sup> <a name="AbbreviationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput"></a>

```go
func AbbreviationInput() *string
```

- *Type:* *string

---

##### `AnswerChoicesInput`<sup>Optional</sup> <a name="AnswerChoicesInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput"></a>

```go
func AnswerChoicesInput() interface{}
```

- *Type:* interface{}

---

##### `AnswerInstructionsInput`<sup>Optional</sup> <a name="AnswerInstructionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput"></a>

```go
func AnswerInstructionsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput"></a>

```go
func MetricsInput() ContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `PredefinedQuestionConfigInput`<sup>Optional</sup> <a name="PredefinedQuestionConfigInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput"></a>

```go
func PredefinedQuestionConfigInput() ContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QaQuestionDataOptionsInput`<sup>Optional</sup> <a name="QaQuestionDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput"></a>

```go
func QaQuestionDataOptionsInput() ContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `QaScorecardInput`<sup>Optional</sup> <a name="QaScorecardInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput"></a>

```go
func QaScorecardInput() *string
```

- *Type:* *string

---

##### `QuestionBodyInput`<sup>Optional</sup> <a name="QuestionBodyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput"></a>

```go
func QuestionBodyInput() *string
```

- *Type:* *string

---

##### `QuestionTypeInput`<sup>Optional</sup> <a name="QuestionTypeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput"></a>

```go
func QuestionTypeInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TuningMetadataInput`<sup>Optional</sup> <a name="TuningMetadataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput"></a>

```go
func TuningMetadataInput() ContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `Abbreviation`<sup>Required</sup> <a name="Abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation"></a>

```go
func Abbreviation() *string
```

- *Type:* *string

---

##### `AnswerInstructions`<sup>Required</sup> <a name="AnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions"></a>

```go
func AnswerInstructions() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard"></a>

```go
func QaScorecard() *string
```

- *Type:* *string

---

##### `QuestionBody`<sup>Required</sup> <a name="QuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody"></a>

```go
func QuestionBody() *string
```

- *Type:* *string

---

##### `QuestionType`<sup>Required</sup> <a name="QuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType"></a>

```go
func QuestionType() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaQuestionAnswerChoices <a name="ContactCenterInsightsQaQuestionAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionAnswerChoices {
	BoolValue: interface{},
	Key: *string,
	NaValue: interface{},
	NumValue: *f64,
	Score: *f64,
	StrValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key">Key</a></code> | <code>*string</code> | A short string used as an identifier. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue">NaValue</a></code> | <code>interface{}</code> | A value of "Not Applicable (N/A)". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue">NumValue</a></code> | <code>*f64</code> | Numerical value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score">Score</a></code> | <code>*f64</code> | Numerical score of the answer, used for generating the overall score of a QaScorecardResult. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue">StrValue</a></code> | <code>*string</code> | String value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#bool_value ContactCenterInsightsQaQuestion#bool_value}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key"></a>

```go
Key *string
```

- *Type:* *string

A short string used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#key ContactCenterInsightsQaQuestion#key}

---

##### `NaValue`<sup>Optional</sup> <a name="NaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue"></a>

```go
NaValue interface{}
```

- *Type:* interface{}

A value of "Not Applicable (N/A)".

If provided, this field may only
be set to 'true'. If a question receives this answer, it will be
excluded from any score calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#na_value ContactCenterInsightsQaQuestion#na_value}

---

##### `NumValue`<sup>Optional</sup> <a name="NumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue"></a>

```go
NumValue *f64
```

- *Type:* *f64

Numerical value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#num_value ContactCenterInsightsQaQuestion#num_value}

---

##### `Score`<sup>Optional</sup> <a name="Score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score"></a>

```go
Score *f64
```

- *Type:* *f64

Numerical score of the answer, used for generating the overall score of a QaScorecardResult.

If the answer uses na_value, this field is unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#score ContactCenterInsightsQaQuestion#score}

---

##### `StrValue`<sup>Optional</sup> <a name="StrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue"></a>

```go
StrValue *string
```

- *Type:* *string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#str_value ContactCenterInsightsQaQuestion#str_value}

---

### ContactCenterInsightsQaQuestionConfig <a name="ContactCenterInsightsQaQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	QaScorecard: *string,
	Revision: *string,
	Abbreviation: *string,
	AnswerChoices: interface{},
	AnswerInstructions: *string,
	Id: *string,
	Metrics: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics,
	Order: *f64,
	PredefinedQuestionConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig,
	Project: *string,
	QaQuestionDataOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions,
	QuestionBody: *string,
	QuestionType: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts,
	TuningMetadata: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard">QaScorecard</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision">Revision</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation">Abbreviation</a></code> | <code>*string</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices">AnswerChoices</a></code> | <code>interface{}</code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions">AnswerInstructions</a></code> | <code>*string</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order">Order</a></code> | <code>*f64</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig">PredefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions">QaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody">QuestionBody</a></code> | <code>*string</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType">QuestionType</a></code> | <code>*string</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata">TuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#location ContactCenterInsightsQaQuestion#location}

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard"></a>

```go
QaScorecard *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#qa_scorecard ContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#revision ContactCenterInsightsQaQuestion#revision}

---

##### `Abbreviation`<sup>Optional</sup> <a name="Abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation"></a>

```go
Abbreviation *string
```

- *Type:* *string

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#abbreviation ContactCenterInsightsQaQuestion#abbreviation}

---

##### `AnswerChoices`<sup>Optional</sup> <a name="AnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices"></a>

```go
AnswerChoices interface{}
```

- *Type:* interface{}

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#answer_choices ContactCenterInsightsQaQuestion#answer_choices}

---

##### `AnswerInstructions`<sup>Optional</sup> <a name="AnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions"></a>

```go
AnswerInstructions *string
```

- *Type:* *string

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#answer_instructions ContactCenterInsightsQaQuestion#answer_instructions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics"></a>

```go
Metrics ContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#metrics ContactCenterInsightsQaQuestion#metrics}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#order ContactCenterInsightsQaQuestion#order}

---

##### `PredefinedQuestionConfig`<sup>Optional</sup> <a name="PredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig"></a>

```go
PredefinedQuestionConfig ContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#predefined_question_config ContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}.

---

##### `QaQuestionDataOptions`<sup>Optional</sup> <a name="QaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions"></a>

```go
QaQuestionDataOptions ContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#qa_question_data_options ContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `QuestionBody`<sup>Optional</sup> <a name="QuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody"></a>

```go
QuestionBody *string
```

- *Type:* *string

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#question_body ContactCenterInsightsQaQuestion#question_body}

---

##### `QuestionType`<sup>Optional</sup> <a name="QuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType"></a>

```go
QuestionType *string
```

- *Type:* *string

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#question_type ContactCenterInsightsQaQuestion#question_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#tags ContactCenterInsightsQaQuestion#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts"></a>

```go
Timeouts ContactCenterInsightsQaQuestionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#timeouts ContactCenterInsightsQaQuestion#timeouts}

---

##### `TuningMetadata`<sup>Optional</sup> <a name="TuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata"></a>

```go
TuningMetadata ContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#tuning_metadata ContactCenterInsightsQaQuestion#tuning_metadata}

---

### ContactCenterInsightsQaQuestionMetrics <a name="ContactCenterInsightsQaQuestionMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionMetrics {

}
```


### ContactCenterInsightsQaQuestionPredefinedQuestionConfig <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type">Type</a></code> | <code>*string</code> | The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#type ContactCenterInsightsQaQuestion#type}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions {
	ConversationDataOptions: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions">ConversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | conversation_data_options block. |

---

##### `ConversationDataOptions`<sup>Optional</sup> <a name="ConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions"></a>

```go
ConversationDataOptions ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#conversation_data_options ContactCenterInsightsQaQuestion#conversation_data_options}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions {
	IncludeDialogflowInteractionData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData">IncludeDialogflowInteractionData</a></code> | <code>interface{}</code> | Whether to include the per turn Dialogflow interaction data in conversation transcript. |

---

##### `IncludeDialogflowInteractionData`<sup>Optional</sup> <a name="IncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData"></a>

```go
IncludeDialogflowInteractionData interface{}
```

- *Type:* interface{}

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#include_dialogflow_interaction_data ContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

### ContactCenterInsightsQaQuestionTimeouts <a name="ContactCenterInsightsQaQuestionTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}.

---

### ContactCenterInsightsQaQuestionTuningMetadata <a name="ContactCenterInsightsQaQuestionTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

&contactcenterinsightsqaquestion.ContactCenterInsightsQaQuestionTuningMetadata {
	DatasetValidationWarnings: *[]*string,
	TotalValidLabelCount: *string,
	TuningError: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings">DatasetValidationWarnings</a></code> | <code>*[]*string</code> | A list of any applicable data validation warnings about the question's feedback labels. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount">TotalValidLabelCount</a></code> | <code>*string</code> | Total number of valid labels provided for the question at the time of tuining. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError">TuningError</a></code> | <code>*string</code> | Error status of the tuning operation for the question. Will only be set if the tuning operation failed. |

---

##### `DatasetValidationWarnings`<sup>Optional</sup> <a name="DatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings"></a>

```go
DatasetValidationWarnings *[]*string
```

- *Type:* *[]*string

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#dataset_validation_warnings ContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

##### `TotalValidLabelCount`<sup>Optional</sup> <a name="TotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount"></a>

```go
TotalValidLabelCount *string
```

- *Type:* *string

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#total_valid_label_count ContactCenterInsightsQaQuestion#total_valid_label_count}

---

##### `TuningError`<sup>Optional</sup> <a name="TuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError"></a>

```go
TuningError *string
```

- *Type:* *string

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_question#tuning_error ContactCenterInsightsQaQuestion#tuning_error}

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaQuestionAnswerChoicesList <a name="ContactCenterInsightsQaQuestionAnswerChoicesList" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionAnswerChoicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContactCenterInsightsQaQuestionAnswerChoicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get"></a>

```go
func Get(index *f64) ContactCenterInsightsQaQuestionAnswerChoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContactCenterInsightsQaQuestionAnswerChoicesOutputReference <a name="ContactCenterInsightsQaQuestionAnswerChoicesOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionAnswerChoicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContactCenterInsightsQaQuestionAnswerChoicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue">ResetNaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue">ResetNumValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore">ResetScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue">ResetStrValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetNaValue` <a name="ResetNaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue"></a>

```go
func ResetNaValue()
```

##### `ResetNumValue` <a name="ResetNumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue"></a>

```go
func ResetNumValue()
```

##### `ResetScore` <a name="ResetScore" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore"></a>

```go
func ResetScore()
```

##### `ResetStrValue` <a name="ResetStrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue"></a>

```go
func ResetStrValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput">NaValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput">NumValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput">ScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput">StrValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue">NaValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue">NumValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score">Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue">StrValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NaValueInput`<sup>Optional</sup> <a name="NaValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput"></a>

```go
func NaValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumValueInput`<sup>Optional</sup> <a name="NumValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput"></a>

```go
func NumValueInput() *f64
```

- *Type:* *f64

---

##### `ScoreInput`<sup>Optional</sup> <a name="ScoreInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput"></a>

```go
func ScoreInput() *f64
```

- *Type:* *f64

---

##### `StrValueInput`<sup>Optional</sup> <a name="StrValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput"></a>

```go
func StrValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `NaValue`<sup>Required</sup> <a name="NaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue"></a>

```go
func NaValue() interface{}
```

- *Type:* interface{}

---

##### `NumValue`<sup>Required</sup> <a name="NumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue"></a>

```go
func NumValue() *f64
```

- *Type:* *f64

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score"></a>

```go
func Score() *f64
```

- *Type:* *f64

---

##### `StrValue`<sup>Required</sup> <a name="StrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue"></a>

```go
func StrValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContactCenterInsightsQaQuestionMetricsOutputReference <a name="ContactCenterInsightsQaQuestionMetricsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsQaQuestionMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy">Accuracy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accuracy`<sup>Required</sup> <a name="Accuracy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy"></a>

```go
func Accuracy() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---


### ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData">ResetIncludeDialogflowInteractionData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeDialogflowInteractionData` <a name="ResetIncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData"></a>

```go
func ResetIncludeDialogflowInteractionData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput">IncludeDialogflowInteractionDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData">IncludeDialogflowInteractionData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeDialogflowInteractionDataInput`<sup>Optional</sup> <a name="IncludeDialogflowInteractionDataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput"></a>

```go
func IncludeDialogflowInteractionDataInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeDialogflowInteractionData`<sup>Required</sup> <a name="IncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData"></a>

```go
func IncludeDialogflowInteractionData() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions">PutConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions">ResetConversationDataOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConversationDataOptions` <a name="PutConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions"></a>

```go
func PutConversationDataOptions(value ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `ResetConversationDataOptions` <a name="ResetConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions"></a>

```go
func ResetConversationDataOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions">ConversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput">ConversationDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConversationDataOptions`<sup>Required</sup> <a name="ConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions"></a>

```go
func ConversationDataOptions() ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a>

---

##### `ConversationDataOptionsInput`<sup>Optional</sup> <a name="ConversationDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput"></a>

```go
func ConversationDataOptionsInput() ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---


### ContactCenterInsightsQaQuestionTimeoutsOutputReference <a name="ContactCenterInsightsQaQuestionTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsQaQuestionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContactCenterInsightsQaQuestionTuningMetadataOutputReference <a name="ContactCenterInsightsQaQuestionTuningMetadataOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqaquestion"

contactcenterinsightsqaquestion.NewContactCenterInsightsQaQuestionTuningMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsQaQuestionTuningMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings">ResetDatasetValidationWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount">ResetTotalValidLabelCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError">ResetTuningError</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetValidationWarnings` <a name="ResetDatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings"></a>

```go
func ResetDatasetValidationWarnings()
```

##### `ResetTotalValidLabelCount` <a name="ResetTotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount"></a>

```go
func ResetTotalValidLabelCount()
```

##### `ResetTuningError` <a name="ResetTuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError"></a>

```go
func ResetTuningError()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput">DatasetValidationWarningsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput">TotalValidLabelCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput">TuningErrorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings">DatasetValidationWarnings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount">TotalValidLabelCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError">TuningError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetValidationWarningsInput`<sup>Optional</sup> <a name="DatasetValidationWarningsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput"></a>

```go
func DatasetValidationWarningsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TotalValidLabelCountInput`<sup>Optional</sup> <a name="TotalValidLabelCountInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput"></a>

```go
func TotalValidLabelCountInput() *string
```

- *Type:* *string

---

##### `TuningErrorInput`<sup>Optional</sup> <a name="TuningErrorInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput"></a>

```go
func TuningErrorInput() *string
```

- *Type:* *string

---

##### `DatasetValidationWarnings`<sup>Required</sup> <a name="DatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings"></a>

```go
func DatasetValidationWarnings() *[]*string
```

- *Type:* *[]*string

---

##### `TotalValidLabelCount`<sup>Required</sup> <a name="TotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount"></a>

```go
func TotalValidLabelCount() *string
```

- *Type:* *string

---

##### `TuningError`<sup>Required</sup> <a name="TuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError"></a>

```go
func TuningError() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---



