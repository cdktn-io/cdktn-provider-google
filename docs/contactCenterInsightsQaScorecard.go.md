# `contactCenterInsightsQaScorecard` Submodule <a name="`contactCenterInsightsQaScorecard` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaScorecard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaScorecard <a name="ContactCenterInsightsQaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard google_contact_center_insights_qa_scorecard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

contactcenterinsightsqascorecard.NewContactCenterInsightsQaScorecard(scope Construct, id *string, config ContactCenterInsightsQaScorecardConfig) ContactCenterInsightsQaScorecard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig">ContactCenterInsightsQaScorecardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig">ContactCenterInsightsQaScorecardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts"></a>

```go
func PutTimeouts(value ContactCenterInsightsQaScorecardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault"></a>

```go
func ResetIsDefault()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

contactcenterinsightsqascorecard.ContactCenterInsightsQaScorecard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

contactcenterinsightsqascorecard.ContactCenterInsightsQaScorecard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

contactcenterinsightsqascorecard.ContactCenterInsightsQaScorecard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

contactcenterinsightsqascorecard.ContactCenterInsightsQaScorecard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContactCenterInsightsQaScorecard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContactCenterInsightsQaScorecard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaScorecard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput">QaScorecardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId">QaScorecardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source">Source</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts"></a>

```go
func Timeouts() ContactCenterInsightsQaScorecardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QaScorecardIdInput`<sup>Optional</sup> <a name="QaScorecardIdInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput"></a>

```go
func QaScorecardIdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QaScorecardId`<sup>Required</sup> <a name="QaScorecardId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId"></a>

```go
func QaScorecardId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaScorecardConfig <a name="ContactCenterInsightsQaScorecardConfig" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

&contactcenterinsightsqascorecard.ContactCenterInsightsQaScorecardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	QaScorecardId: *string,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	IsDefault: interface{},
	Project: *string,
	Source: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId">QaScorecardId</a></code> | <code>*string</code> | A unique ID for the new QaScorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description">Description</a></code> | <code>*string</code> | A text description explaining the intent of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-specified display name of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | Whether the scorecard is the default one for the project. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source">Source</a></code> | <code>*string</code> | Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#location ContactCenterInsightsQaScorecard#location}

---

##### `QaScorecardId`<sup>Required</sup> <a name="QaScorecardId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId"></a>

```go
QaScorecardId *string
```

- *Type:* *string

A unique ID for the new QaScorecard.

This ID will become the final
component of the QaScorecard's resource name. If no ID is specified, a
server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[a-z0-9-]{4,64}$'. Valid characters are 'a-z-'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#qa_scorecard_id ContactCenterInsightsQaScorecard#qa_scorecard_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#deletion_policy ContactCenterInsightsQaScorecard#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A text description explaining the intent of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#description ContactCenterInsightsQaScorecard#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-specified display name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#display_name ContactCenterInsightsQaScorecard#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

Whether the scorecard is the default one for the project.

A default scorecard cannot be deleted and will always appear first in
scorecard selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#is_default ContactCenterInsightsQaScorecard#is_default}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#source ContactCenterInsightsQaScorecard#source}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts"></a>

```go
Timeouts ContactCenterInsightsQaScorecardTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#timeouts ContactCenterInsightsQaScorecard#timeouts}

---

### ContactCenterInsightsQaScorecardTimeouts <a name="ContactCenterInsightsQaScorecardTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

&contactcenterinsightsqascorecard.ContactCenterInsightsQaScorecardTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaScorecardTimeoutsOutputReference <a name="ContactCenterInsightsQaScorecardTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsqascorecard"

contactcenterinsightsqascorecard.NewContactCenterInsightsQaScorecardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsQaScorecardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



