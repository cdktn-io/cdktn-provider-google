# `contactCenterInsightsAssessmentRule` Submodule <a name="`contactCenterInsightsAssessmentRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAssessmentRule <a name="ContactCenterInsightsAssessmentRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.NewContactCenterInsightsAssessmentRule(scope Construct, id *string, config ContactCenterInsightsAssessmentRuleConfig) ContactCenterInsightsAssessmentRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig">ContactCenterInsightsAssessmentRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig">ContactCenterInsightsAssessmentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule">PutSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo">PutScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetAssessmentRuleId">ResetAssessmentRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetSampleRule">ResetSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetScheduleInfo">ResetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSampleRule` <a name="PutSampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule"></a>

```go
func PutSampleRule(value ContactCenterInsightsAssessmentRuleSampleRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putSampleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `PutScheduleInfo` <a name="PutScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo"></a>

```go
func PutScheduleInfo(value ContactCenterInsightsAssessmentRuleScheduleInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts"></a>

```go
func PutTimeouts(value ContactCenterInsightsAssessmentRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetActive"></a>

```go
func ResetActive()
```

##### `ResetAssessmentRuleId` <a name="ResetAssessmentRuleId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetAssessmentRuleId"></a>

```go
func ResetAssessmentRuleId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSampleRule` <a name="ResetSampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetSampleRule"></a>

```go
func ResetSampleRule()
```

##### `ResetScheduleInfo` <a name="ResetScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetScheduleInfo"></a>

```go
func ResetScheduleInfo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContactCenterInsightsAssessmentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContactCenterInsightsAssessmentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAssessmentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRule">SampleRule</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference">ContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference">ContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput">AssessmentRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRuleInput">SampleRuleInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfoInput">ScheduleInfoInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleId">AssessmentRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SampleRule`<sup>Required</sup> <a name="SampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRule"></a>

```go
func SampleRule() ContactCenterInsightsAssessmentRuleSampleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference">ContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a>

---

##### `ScheduleInfo`<sup>Required</sup> <a name="ScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfo"></a>

```go
func ScheduleInfo() ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeouts"></a>

```go
func Timeouts() ContactCenterInsightsAssessmentRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference">ContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `AssessmentRuleIdInput`<sup>Optional</sup> <a name="AssessmentRuleIdInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput"></a>

```go
func AssessmentRuleIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SampleRuleInput`<sup>Optional</sup> <a name="SampleRuleInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.sampleRuleInput"></a>

```go
func SampleRuleInput() ContactCenterInsightsAssessmentRuleSampleRule
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `ScheduleInfoInput`<sup>Optional</sup> <a name="ScheduleInfoInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.scheduleInfoInput"></a>

```go
func ScheduleInfoInput() ContactCenterInsightsAssessmentRuleScheduleInfo
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `AssessmentRuleId`<sup>Required</sup> <a name="AssessmentRuleId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.assessmentRuleId"></a>

```go
func AssessmentRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAssessmentRuleConfig <a name="ContactCenterInsightsAssessmentRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

&contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Active: interface{},
	AssessmentRuleId: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	SampleRule: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule,
	ScheduleInfo: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.location">Location</a></code> | <code>*string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.active">Active</a></code> | <code>interface{}</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId">AssessmentRuleId</a></code> | <code>*string</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.sampleRule">SampleRule</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#location ContactCenterInsightsAssessmentRule#location}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#active ContactCenterInsightsAssessmentRule#active}

---

##### `AssessmentRuleId`<sup>Optional</sup> <a name="AssessmentRuleId" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId"></a>

```go
AssessmentRuleId *string
```

- *Type:* *string

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#assessment_rule_id ContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#display_name ContactCenterInsightsAssessmentRule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#id ContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#project ContactCenterInsightsAssessmentRule#project}.

---

##### `SampleRule`<sup>Optional</sup> <a name="SampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.sampleRule"></a>

```go
SampleRule ContactCenterInsightsAssessmentRuleSampleRule
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#sample_rule ContactCenterInsightsAssessmentRule#sample_rule}

---

##### `ScheduleInfo`<sup>Optional</sup> <a name="ScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo"></a>

```go
ScheduleInfo ContactCenterInsightsAssessmentRuleScheduleInfo
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#schedule_info ContactCenterInsightsAssessmentRule#schedule_info}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleConfig.property.timeouts"></a>

```go
Timeouts ContactCenterInsightsAssessmentRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts">ContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#timeouts ContactCenterInsightsAssessmentRule#timeouts}

---

### ContactCenterInsightsAssessmentRuleSampleRule <a name="ContactCenterInsightsAssessmentRuleSampleRule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

&contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRuleSampleRule {
	ConversationFilter: *string,
	Dimension: *string,
	SamplePercentage: *f64,
	SampleRow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter">ConversationFilter</a></code> | <code>*string</code> | To specify the filter for the conversions that should apply this sample rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.dimension">Dimension</a></code> | <code>*string</code> | Group by dimension to sample the conversation. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage">SamplePercentage</a></code> | <code>*f64</code> | Percentage of conversations that we should sample  based on the dimension between [0, 100]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow">SampleRow</a></code> | <code>*f64</code> | Number of the conversations that we should sample based on the dimension. |

---

##### `ConversationFilter`<sup>Optional</sup> <a name="ConversationFilter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter"></a>

```go
ConversationFilter *string
```

- *Type:* *string

To specify the filter for the conversions that should apply this sample rule.

An empty filter means this sample rule applies to all conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#conversation_filter ContactCenterInsightsAssessmentRule#conversation_filter}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.dimension"></a>

```go
Dimension *string
```

- *Type:* *string

Group by dimension to sample the conversation.

If no dimension is
provided, the sampling will be applied to the project level.
Current supported dimensions is 'quality_metadata.agent_info.agent_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#dimension ContactCenterInsightsAssessmentRule#dimension}

---

##### `SamplePercentage`<sup>Optional</sup> <a name="SamplePercentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage"></a>

```go
SamplePercentage *f64
```

- *Type:* *f64

Percentage of conversations that we should sample  based on the dimension between [0, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#sample_percentage ContactCenterInsightsAssessmentRule#sample_percentage}

---

##### `SampleRow`<sup>Optional</sup> <a name="SampleRow" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow"></a>

```go
SampleRow *f64
```

- *Type:* *f64

Number of the conversations that we should sample based on the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#sample_row ContactCenterInsightsAssessmentRule#sample_row}

---

### ContactCenterInsightsAssessmentRuleScheduleInfo <a name="ContactCenterInsightsAssessmentRuleScheduleInfo" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

&contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRuleScheduleInfo {
	EndTime: *string,
	Schedule: *string,
	StartTime: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime">EndTime</a></code> | <code>*string</code> | End time of the schedule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule">Schedule</a></code> | <code>*string</code> | The groc expression. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime">StartTime</a></code> | <code>*string</code> | Start time of the schedule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone">TimeZone</a></code> | <code>*string</code> | The timezone to use for the groc expression. If not specified, defaults to UTC. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

End time of the schedule.

If not specified, will keep scheduling new
pipelines for execution until the schedule is no longer active or deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#end_time ContactCenterInsightsAssessmentRule#end_time}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

The groc expression.

Format: 'every number [synchronized]'
Cron syntax is not supported.
Time units can be: minutes, hours
Synchronized is optional and indicates that the schedule should be
synchronized to the start of the interval: every 5 minutes synchronized
means 00:00, 00:05 ...
Otherwise the start time is random within the interval.
Example: 'every 5 minutes'
could be  00:02, 00:07, 00:12, ...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#schedule ContactCenterInsightsAssessmentRule#schedule}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Start time of the schedule.

If not specified, will start as soon as the
schedule is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#start_time ContactCenterInsightsAssessmentRule#start_time}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The timezone to use for the groc expression. If not specified, defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#time_zone ContactCenterInsightsAssessmentRule#time_zone}

---

### ContactCenterInsightsAssessmentRuleTimeouts <a name="ContactCenterInsightsAssessmentRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

&contactcenterinsightsassessmentrule.ContactCenterInsightsAssessmentRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#create ContactCenterInsightsAssessmentRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#delete ContactCenterInsightsAssessmentRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_assessment_rule#update ContactCenterInsightsAssessmentRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAssessmentRuleSampleRuleOutputReference <a name="ContactCenterInsightsAssessmentRuleSampleRuleOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.NewContactCenterInsightsAssessmentRuleSampleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsAssessmentRuleSampleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter">ResetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage">ResetSamplePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow">ResetSampleRow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConversationFilter` <a name="ResetConversationFilter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter"></a>

```go
func ResetConversationFilter()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetSamplePercentage` <a name="ResetSamplePercentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage"></a>

```go
func ResetSamplePercentage()
```

##### `ResetSampleRow` <a name="ResetSampleRow" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow"></a>

```go
func ResetSampleRow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput">ConversationFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput">SamplePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput">SampleRowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter">ConversationFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension">Dimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage">SamplePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow">SampleRow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConversationFilterInput`<sup>Optional</sup> <a name="ConversationFilterInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput"></a>

```go
func ConversationFilterInput() *string
```

- *Type:* *string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() *string
```

- *Type:* *string

---

##### `SamplePercentageInput`<sup>Optional</sup> <a name="SamplePercentageInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput"></a>

```go
func SamplePercentageInput() *f64
```

- *Type:* *f64

---

##### `SampleRowInput`<sup>Optional</sup> <a name="SampleRowInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput"></a>

```go
func SampleRowInput() *f64
```

- *Type:* *f64

---

##### `ConversationFilter`<sup>Required</sup> <a name="ConversationFilter" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter"></a>

```go
func ConversationFilter() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension"></a>

```go
func Dimension() *string
```

- *Type:* *string

---

##### `SamplePercentage`<sup>Required</sup> <a name="SamplePercentage" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage"></a>

```go
func SamplePercentage() *f64
```

- *Type:* *f64

---

##### `SampleRow`<sup>Required</sup> <a name="SampleRow" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow"></a>

```go
func SampleRow() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() ContactCenterInsightsAssessmentRuleSampleRule
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleSampleRule">ContactCenterInsightsAssessmentRuleSampleRule</a>

---


### ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference <a name="ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.NewContactCenterInsightsAssessmentRuleScheduleInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ContactCenterInsightsAssessmentRuleScheduleInfo
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleScheduleInfo">ContactCenterInsightsAssessmentRuleScheduleInfo</a>

---


### ContactCenterInsightsAssessmentRuleTimeoutsOutputReference <a name="ContactCenterInsightsAssessmentRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsassessmentrule"

contactcenterinsightsassessmentrule.NewContactCenterInsightsAssessmentRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsAssessmentRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAssessmentRule.ContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



