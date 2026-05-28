# `contactCenterInsightsAutoLabelingRule` Submodule <a name="`contactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAutoLabelingRule <a name="ContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.NewContactCenterInsightsAutoLabelingRule(scope Construct, id *string, config ContactCenterInsightsAutoLabelingRuleConfig) ContactCenterInsightsAutoLabelingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig">ContactCenterInsightsAutoLabelingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig">ContactCenterInsightsAutoLabelingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">ResetAutoLabelingRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey">ResetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType">ResetLabelKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```go
func PutTimeouts(value ContactCenterInsightsAutoLabelingRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive"></a>

```go
func ResetActive()
```

##### `ResetAutoLabelingRuleId` <a name="ResetAutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```go
func ResetAutoLabelingRuleId()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId"></a>

```go
func ResetId()
```

##### `ResetLabelKey` <a name="ResetLabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```go
func ResetLabelKey()
```

##### `ResetLabelKeyType` <a name="ResetLabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```go
func ResetLabelKeyType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.ContactCenterInsightsAutoLabelingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.ContactCenterInsightsAutoLabelingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.ContactCenterInsightsAutoLabelingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.ContactCenterInsightsAutoLabelingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContactCenterInsightsAutoLabelingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">AutoLabelingRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput">LabelKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">LabelKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">AutoLabelingRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey">LabelKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType">LabelKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```go
func Conditions() ContactCenterInsightsAutoLabelingRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```go
func Timeouts() ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `AutoLabelingRuleIdInput`<sup>Optional</sup> <a name="AutoLabelingRuleIdInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```go
func AutoLabelingRuleIdInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelKeyInput`<sup>Optional</sup> <a name="LabelKeyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```go
func LabelKeyInput() *string
```

- *Type:* *string

---

##### `LabelKeyTypeInput`<sup>Optional</sup> <a name="LabelKeyTypeInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```go
func LabelKeyTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `AutoLabelingRuleId`<sup>Required</sup> <a name="AutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```go
func AutoLabelingRuleId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LabelKey`<sup>Required</sup> <a name="LabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```go
func LabelKey() *string
```

- *Type:* *string

---

##### `LabelKeyType`<sup>Required</sup> <a name="LabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```go
func LabelKeyType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAutoLabelingRuleConditions <a name="ContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

&contactcenterinsightsautolabelingrule.ContactCenterInsightsAutoLabelingRuleConditions {
	Condition: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition">Condition</a></code> | <code>*string</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value">Value</a></code> | <code>*string</code> | CEL expression to be evaluated as the value. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#condition ContactCenterInsightsAutoLabelingRule#condition}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```go
Value *string
```

- *Type:* *string

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#value ContactCenterInsightsAutoLabelingRule#value}

---

### ContactCenterInsightsAutoLabelingRuleConfig <a name="ContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

&contactcenterinsightsautolabelingrule.ContactCenterInsightsAutoLabelingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Active: interface{},
	AutoLabelingRuleId: *string,
	Conditions: interface{},
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	LabelKey: *string,
	LabelKeyType: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location">Location</a></code> | <code>*string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active">Active</a></code> | <code>interface{}</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">AutoLabelingRuleId</a></code> | <code>*string</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description">Description</a></code> | <code>*string</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">LabelKey</a></code> | <code>*string</code> | The label key. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">LabelKeyType</a></code> | <code>*string</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#location ContactCenterInsightsAutoLabelingRule#location}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#active ContactCenterInsightsAutoLabelingRule#active}

---

##### `AutoLabelingRuleId`<sup>Optional</sup> <a name="AutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```go
AutoLabelingRuleId *string
```

- *Type:* *string

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#auto_labeling_rule_id ContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#conditions ContactCenterInsightsAutoLabelingRule#conditions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#deletion_policy ContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#description ContactCenterInsightsAutoLabelingRule#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#display_name ContactCenterInsightsAutoLabelingRule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabelKey`<sup>Optional</sup> <a name="LabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```go
LabelKey *string
```

- *Type:* *string

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key ContactCenterInsightsAutoLabelingRule#label_key}

---

##### `LabelKeyType`<sup>Optional</sup> <a name="LabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```go
LabelKeyType *string
```

- *Type:* *string

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key_type ContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```go
Timeouts ContactCenterInsightsAutoLabelingRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#timeouts ContactCenterInsightsAutoLabelingRule#timeouts}

---

### ContactCenterInsightsAutoLabelingRuleTimeouts <a name="ContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

&contactcenterinsightsautolabelingrule.ContactCenterInsightsAutoLabelingRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAutoLabelingRuleConditionsList <a name="ContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.NewContactCenterInsightsAutoLabelingRuleConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContactCenterInsightsAutoLabelingRuleConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```go
func Get(index *f64) ContactCenterInsightsAutoLabelingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.NewContactCenterInsightsAutoLabelingRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContactCenterInsightsAutoLabelingRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/contactcenterinsightsautolabelingrule"

contactcenterinsightsautolabelingrule.NewContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



