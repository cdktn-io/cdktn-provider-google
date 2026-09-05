# `cesGuardrail` Submodule <a name="`cesGuardrail` Submodule" id="@cdktn/provider-google.cesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesGuardrail <a name="CesGuardrail" id="@cdktn/provider-google.cesGuardrail.CesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrail(scope Construct, id *string, config CesGuardrailConfig) CesGuardrail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig">CesGuardrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig">CesGuardrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback">PutCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter">PutContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy">PutLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity">PutLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety">PutModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback">ResetCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter">ResetContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy">ResetLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity">ResetLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety">ResetModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction"></a>

```go
func PutAction(value CesGuardrailAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---

##### `PutCodeCallback` <a name="PutCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback"></a>

```go
func PutCodeCallback(value CesGuardrailCodeCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---

##### `PutContentFilter` <a name="PutContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter"></a>

```go
func PutContentFilter(value CesGuardrailContentFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---

##### `PutLlmPolicy` <a name="PutLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy"></a>

```go
func PutLlmPolicy(value CesGuardrailLlmPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---

##### `PutLlmPromptSecurity` <a name="PutLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity"></a>

```go
func PutLlmPromptSecurity(value CesGuardrailLlmPromptSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---

##### `PutModelSafety` <a name="PutModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety"></a>

```go
func PutModelSafety(value CesGuardrailModelSafety)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts"></a>

```go
func PutTimeouts(value CesGuardrailTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCodeCallback` <a name="ResetCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback"></a>

```go
func ResetCodeCallback()
```

##### `ResetContentFilter` <a name="ResetContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter"></a>

```go
func ResetContentFilter()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId"></a>

```go
func ResetId()
```

##### `ResetLlmPolicy` <a name="ResetLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy"></a>

```go
func ResetLlmPolicy()
```

##### `ResetLlmPromptSecurity` <a name="ResetLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity"></a>

```go
func ResetLlmPromptSecurity()
```

##### `ResetModelSafety` <a name="ResetModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety"></a>

```go
func ResetModelSafety()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.CesGuardrail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.CesGuardrail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.CesGuardrail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.CesGuardrail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CesGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput">AppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput">CodeCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput">ContentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput">GuardrailIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput">LlmPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput">LlmPromptSecurityInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput">ModelSafetyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId">GuardrailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action"></a>

```go
func Action() CesGuardrailActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a>

---

##### `CodeCallback`<sup>Required</sup> <a name="CodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback"></a>

```go
func CodeCallback() CesGuardrailCodeCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a>

---

##### `ContentFilter`<sup>Required</sup> <a name="ContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter"></a>

```go
func ContentFilter() CesGuardrailContentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `LlmPolicy`<sup>Required</sup> <a name="LlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy"></a>

```go
func LlmPolicy() CesGuardrailLlmPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a>

---

##### `LlmPromptSecurity`<sup>Required</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity"></a>

```go
func LlmPromptSecurity() CesGuardrailLlmPromptSecurityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `ModelSafety`<sup>Required</sup> <a name="ModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety"></a>

```go
func ModelSafety() CesGuardrailModelSafetyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts"></a>

```go
func Timeouts() CesGuardrailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput"></a>

```go
func ActionInput() CesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput"></a>

```go
func AppInput() *string
```

- *Type:* *string

---

##### `CodeCallbackInput`<sup>Optional</sup> <a name="CodeCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput"></a>

```go
func CodeCallbackInput() CesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---

##### `ContentFilterInput`<sup>Optional</sup> <a name="ContentFilterInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput"></a>

```go
func ContentFilterInput() CesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GuardrailIdInput`<sup>Optional</sup> <a name="GuardrailIdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput"></a>

```go
func GuardrailIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LlmPolicyInput`<sup>Optional</sup> <a name="LlmPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput"></a>

```go
func LlmPolicyInput() CesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---

##### `LlmPromptSecurityInput`<sup>Optional</sup> <a name="LlmPromptSecurityInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput"></a>

```go
func LlmPromptSecurityInput() CesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ModelSafetyInput`<sup>Optional</sup> <a name="ModelSafetyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput"></a>

```go
func ModelSafetyInput() CesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId"></a>

```go
func GuardrailId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CesGuardrailAction <a name="CesGuardrailAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailAction {
	GenerativeAnswer: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailActionGenerativeAnswer,
	RespondImmediately: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailActionRespondImmediately,
	TransferAgent: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailActionTransferAgent,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `GenerativeAnswer`<sup>Optional</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer"></a>

```go
GenerativeAnswer CesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#generative_answer CesGuardrail#generative_answer}

---

##### `RespondImmediately`<sup>Optional</sup> <a name="RespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately"></a>

```go
RespondImmediately CesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#respond_immediately CesGuardrail#respond_immediately}

---

##### `TransferAgent`<sup>Optional</sup> <a name="TransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent"></a>

```go
TransferAgent CesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#transfer_agent CesGuardrail#transfer_agent}

---

### CesGuardrailActionGenerativeAnswer <a name="CesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailActionGenerativeAnswer {
	Prompt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt">Prompt</a></code> | <code>*string</code> | The prompt to use for the generative answer. |

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt"></a>

```go
Prompt *string
```

- *Type:* *string

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

### CesGuardrailActionRespondImmediately <a name="CesGuardrailActionRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailActionRespondImmediately {
	Responses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses">Responses</a></code> | <code>interface{}</code> | responses block. |

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses"></a>

```go
Responses interface{}
```

- *Type:* interface{}

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#responses CesGuardrail#responses}

---

### CesGuardrailActionRespondImmediatelyResponses <a name="CesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailActionRespondImmediatelyResponses {
	Text: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text">Text</a></code> | <code>*string</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```go
Text *string
```

- *Type:* *string

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#text CesGuardrail#text}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailActionTransferAgent <a name="CesGuardrailActionTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailActionTransferAgent {
	Agent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent">Agent</a></code> | <code>*string</code> | The name of the agent to transfer the conversation to. |

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent"></a>

```go
Agent *string
```

- *Type:* *string

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#agent CesGuardrail#agent}

---

### CesGuardrailCodeCallback <a name="CesGuardrailCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailCodeCallback {
	AfterAgentCallback: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback,
	AfterModelCallback: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback,
	BeforeAgentCallback: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback,
	BeforeModelCallback: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `AfterAgentCallback`<sup>Optional</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback"></a>

```go
AfterAgentCallback CesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#after_agent_callback CesGuardrail#after_agent_callback}

---

##### `AfterModelCallback`<sup>Optional</sup> <a name="AfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback"></a>

```go
AfterModelCallback CesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#after_model_callback CesGuardrail#after_model_callback}

---

##### `BeforeAgentCallback`<sup>Optional</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```go
BeforeAgentCallback CesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#before_agent_callback CesGuardrail#before_agent_callback}

---

##### `BeforeModelCallback`<sup>Optional</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback"></a>

```go
BeforeModelCallback CesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#before_model_callback CesGuardrail#before_model_callback}

---

### CesGuardrailCodeCallbackAfterAgentCallback <a name="CesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailCodeCallbackAfterAgentCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackAfterModelCallback <a name="CesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailCodeCallbackAfterModelCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeAgentCallback <a name="CesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailCodeCallbackBeforeAgentCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeModelCallback <a name="CesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailCodeCallbackBeforeModelCallback {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailConfig <a name="CesGuardrailConfig" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	App: *string,
	DisplayName: *string,
	GuardrailId: *string,
	Location: *string,
	Action: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailAction,
	CodeCallback: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailCodeCallback,
	ContentFilter: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailContentFilter,
	DeletionPolicy: *string,
	Description: *string,
	Enabled: interface{},
	Id: *string,
	LlmPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailLlmPolicy,
	LlmPromptSecurity: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailLlmPromptSecurity,
	ModelSafety: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailModelSafety,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app">App</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId">GuardrailId</a></code> | <code>*string</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback">CodeCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter">ContentFilter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description">Description</a></code> | <code>*string</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#id CesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy">LlmPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity">LlmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety">ModelSafety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#project CesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app"></a>

```go
App *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#app CesGuardrail#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#display_name CesGuardrail#display_name}

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId"></a>

```go
GuardrailId *string
```

- *Type:* *string

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#guardrail_id CesGuardrail#guardrail_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#location CesGuardrail#location}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action"></a>

```go
Action CesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#action CesGuardrail#action}

---

##### `CodeCallback`<sup>Optional</sup> <a name="CodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback"></a>

```go
CodeCallback CesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#code_callback CesGuardrail#code_callback}

---

##### `ContentFilter`<sup>Optional</sup> <a name="ContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter"></a>

```go
ContentFilter CesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#content_filter CesGuardrail#content_filter}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#deletion_policy CesGuardrail#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#enabled CesGuardrail#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#id CesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LlmPolicy`<sup>Optional</sup> <a name="LlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy"></a>

```go
LlmPolicy CesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#llm_policy CesGuardrail#llm_policy}

---

##### `LlmPromptSecurity`<sup>Optional</sup> <a name="LlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity"></a>

```go
LlmPromptSecurity CesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#llm_prompt_security CesGuardrail#llm_prompt_security}

---

##### `ModelSafety`<sup>Optional</sup> <a name="ModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety"></a>

```go
ModelSafety CesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model_safety CesGuardrail#model_safety}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#project CesGuardrail#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts"></a>

```go
Timeouts CesGuardrailTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#timeouts CesGuardrail#timeouts}

---

### CesGuardrailContentFilter <a name="CesGuardrailContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailContentFilter {
	MatchType: *string,
	BannedContents: *[]*string,
	BannedContentsInAgentResponse: *[]*string,
	BannedContentsInUserInput: *[]*string,
	DisregardDiacritics: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType">MatchType</a></code> | <code>*string</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents">BannedContents</a></code> | <code>*[]*string</code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>*[]*string</code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>*[]*string</code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>interface{}</code> | If true, diacritics are ignored during matching. |

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType"></a>

```go
MatchType *string
```

- *Type:* *string

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#match_type CesGuardrail#match_type}

---

##### `BannedContents`<sup>Optional</sup> <a name="BannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents"></a>

```go
BannedContents *[]*string
```

- *Type:* *[]*string

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#banned_contents CesGuardrail#banned_contents}

---

##### `BannedContentsInAgentResponse`<sup>Optional</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```go
BannedContentsInAgentResponse *[]*string
```

- *Type:* *[]*string

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#banned_contents_in_agent_response CesGuardrail#banned_contents_in_agent_response}

---

##### `BannedContentsInUserInput`<sup>Optional</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```go
BannedContentsInUserInput *[]*string
```

- *Type:* *[]*string

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#banned_contents_in_user_input CesGuardrail#banned_contents_in_user_input}

---

##### `DisregardDiacritics`<sup>Optional</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics"></a>

```go
DisregardDiacritics interface{}
```

- *Type:* interface{}

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disregard_diacritics CesGuardrail#disregard_diacritics}

---

### CesGuardrailLlmPolicy <a name="CesGuardrailLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailLlmPolicy {
	PolicyScope: *string,
	Prompt: *string,
	AllowShortUtterance: interface{},
	FailOpen: interface{},
	MaxConversationMessages: *f64,
	ModelSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailLlmPolicyModelSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope">PolicyScope</a></code> | <code>*string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt">Prompt</a></code> | <code>*string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope"></a>

```go
PolicyScope *string
```

- *Type:* *string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt"></a>

```go
Prompt *string
```

- *Type:* *string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```go
AllowShortUtterance interface{}
```

- *Type:* interface{}

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```go
MaxConversationMessages *f64
```

- *Type:* *f64

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings"></a>

```go
ModelSettings CesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPolicyModelSettings <a name="CesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailLlmPolicyModelSettings {
	Model: *string,
	Temperature: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model">Model</a></code> | <code>*string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature">Temperature</a></code> | <code>*f64</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurity <a name="CesGuardrailLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailLlmPromptSecurity {
	CustomPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy,
	DefaultSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings,
	FailOpen: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `CustomPolicy`<sup>Optional</sup> <a name="CustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```go
CustomPolicy CesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#custom_policy CesGuardrail#custom_policy}

---

##### `DefaultSettings`<sup>Optional</sup> <a name="DefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```go
DefaultSettings CesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#default_settings CesGuardrail#default_settings}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

### CesGuardrailLlmPromptSecurityCustomPolicy <a name="CesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailLlmPromptSecurityCustomPolicy {
	PolicyScope: *string,
	Prompt: *string,
	AllowShortUtterance: interface{},
	FailOpen: interface{},
	MaxConversationMessages: *f64,
	ModelSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">PolicyScope</a></code> | <code>*string</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">Prompt</a></code> | <code>*string</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```go
PolicyScope *string
```

- *Type:* *string

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```go
Prompt *string
```

- *Type:* *string

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `AllowShortUtterance`<sup>Optional</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```go
AllowShortUtterance interface{}
```

- *Type:* interface{}

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `MaxConversationMessages`<sup>Optional</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```go
MaxConversationMessages *f64
```

- *Type:* *f64

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```go
ModelSettings CesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings {
	Model: *string,
	Temperature: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">Model</a></code> | <code>*string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">Temperature</a></code> | <code>*f64</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurityDefaultSettings <a name="CesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailLlmPromptSecurityDefaultSettings {

}
```


### CesGuardrailModelSafety <a name="CesGuardrailModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailModelSafety {
	SafetySettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings">SafetySettings</a></code> | <code>interface{}</code> | safety_settings block. |

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings"></a>

```go
SafetySettings interface{}
```

- *Type:* interface{}

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#safety_settings CesGuardrail#safety_settings}

---

### CesGuardrailModelSafetySafetySettings <a name="CesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailModelSafetySafetySettings {
	Category: *string,
	Threshold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category">Category</a></code> | <code>*string</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold">Threshold</a></code> | <code>*string</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category"></a>

```go
Category *string
```

- *Type:* *string

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#category CesGuardrail#category}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold"></a>

```go
Threshold *string
```

- *Type:* *string

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#threshold CesGuardrail#threshold}

---

### CesGuardrailTimeouts <a name="CesGuardrailTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

&cesguardrail.CesGuardrailTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#create CesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#delete CesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#update CesGuardrail#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#create CesGuardrail#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#delete CesGuardrail#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#update CesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesGuardrailActionGenerativeAnswerOutputReference <a name="CesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailActionGenerativeAnswerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailActionGenerativeAnswerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">PromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```go
func PromptInput() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---


### CesGuardrailActionOutputReference <a name="CesGuardrailActionOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer">PutGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately">PutRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent">PutTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer">ResetGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately">ResetRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent">ResetTransferAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenerativeAnswer` <a name="PutGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```go
func PutGenerativeAnswer(value CesGuardrailActionGenerativeAnswer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---

##### `PutRespondImmediately` <a name="PutRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately"></a>

```go
func PutRespondImmediately(value CesGuardrailActionRespondImmediately)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---

##### `PutTransferAgent` <a name="PutTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent"></a>

```go
func PutTransferAgent(value CesGuardrailActionTransferAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---

##### `ResetGenerativeAnswer` <a name="ResetGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```go
func ResetGenerativeAnswer()
```

##### `ResetRespondImmediately` <a name="ResetRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately"></a>

```go
func ResetRespondImmediately()
```

##### `ResetTransferAgent` <a name="ResetTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent"></a>

```go
func ResetTransferAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer">GenerativeAnswer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately">RespondImmediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent">TransferAgent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput">GenerativeAnswerInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput">RespondImmediatelyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput">TransferAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerativeAnswer`<sup>Required</sup> <a name="GenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer"></a>

```go
func GenerativeAnswer() CesGuardrailActionGenerativeAnswerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `RespondImmediately`<sup>Required</sup> <a name="RespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately"></a>

```go
func RespondImmediately() CesGuardrailActionRespondImmediatelyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `TransferAgent`<sup>Required</sup> <a name="TransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent"></a>

```go
func TransferAgent() CesGuardrailActionTransferAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a>

---

##### `GenerativeAnswerInput`<sup>Optional</sup> <a name="GenerativeAnswerInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```go
func GenerativeAnswerInput() CesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---

##### `RespondImmediatelyInput`<sup>Optional</sup> <a name="RespondImmediatelyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```go
func RespondImmediatelyInput() CesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---

##### `TransferAgentInput`<sup>Optional</sup> <a name="TransferAgentInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput"></a>

```go
func TransferAgentInput() CesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---


### CesGuardrailActionRespondImmediatelyOutputReference <a name="CesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailActionRespondImmediatelyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailActionRespondImmediatelyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses">PutResponses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponses` <a name="PutResponses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```go
func PutResponses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses">Responses</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">ResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```go
func Responses() CesGuardrailActionRespondImmediatelyResponsesList
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `ResponsesInput`<sup>Optional</sup> <a name="ResponsesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```go
func ResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---


### CesGuardrailActionRespondImmediatelyResponsesList <a name="CesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailActionRespondImmediatelyResponsesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesGuardrailActionRespondImmediatelyResponsesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```go
func Get(index *f64) CesGuardrailActionRespondImmediatelyResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="CesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailActionRespondImmediatelyResponsesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesGuardrailActionRespondImmediatelyResponsesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesGuardrailActionTransferAgentOutputReference <a name="CesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailActionTransferAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailActionTransferAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput">AgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent">Agent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```go
func AgentInput() *string
```

- *Type:* *string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```go
func Agent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---


### CesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailCodeCallbackAfterAgentCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailCodeCallbackAfterAgentCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---


### CesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailCodeCallbackAfterModelCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailCodeCallbackAfterModelCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---


### CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### CesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailCodeCallbackBeforeModelCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailCodeCallbackBeforeModelCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---


### CesGuardrailCodeCallbackOutputReference <a name="CesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailCodeCallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailCodeCallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">PutAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback">PutAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">PutBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">PutBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">ResetAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">ResetAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">ResetBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">ResetBeforeModelCallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAfterAgentCallback` <a name="PutAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```go
func PutAfterAgentCallback(value CesGuardrailCodeCallbackAfterAgentCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `PutAfterModelCallback` <a name="PutAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```go
func PutAfterModelCallback(value CesGuardrailCodeCallbackAfterModelCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `PutBeforeAgentCallback` <a name="PutBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```go
func PutBeforeAgentCallback(value CesGuardrailCodeCallbackBeforeAgentCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `PutBeforeModelCallback` <a name="PutBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```go
func PutBeforeModelCallback(value CesGuardrailCodeCallbackBeforeModelCallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `ResetAfterAgentCallback` <a name="ResetAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```go
func ResetAfterAgentCallback()
```

##### `ResetAfterModelCallback` <a name="ResetAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```go
func ResetAfterModelCallback()
```

##### `ResetBeforeAgentCallback` <a name="ResetBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```go
func ResetBeforeAgentCallback()
```

##### `ResetBeforeModelCallback` <a name="ResetBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```go
func ResetBeforeModelCallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">AfterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback">AfterModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">BeforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">BeforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">AfterAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">AfterModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">BeforeAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">BeforeModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterAgentCallback`<sup>Required</sup> <a name="AfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```go
func AfterAgentCallback() CesGuardrailCodeCallbackAfterAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `AfterModelCallback`<sup>Required</sup> <a name="AfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```go
func AfterModelCallback() CesGuardrailCodeCallbackAfterModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `BeforeAgentCallback`<sup>Required</sup> <a name="BeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```go
func BeforeAgentCallback() CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `BeforeModelCallback`<sup>Required</sup> <a name="BeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```go
func BeforeModelCallback() CesGuardrailCodeCallbackBeforeModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `AfterAgentCallbackInput`<sup>Optional</sup> <a name="AfterAgentCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```go
func AfterAgentCallbackInput() CesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `AfterModelCallbackInput`<sup>Optional</sup> <a name="AfterModelCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```go
func AfterModelCallbackInput() CesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `BeforeAgentCallbackInput`<sup>Optional</sup> <a name="BeforeAgentCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```go
func BeforeAgentCallbackInput() CesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `BeforeModelCallbackInput`<sup>Optional</sup> <a name="BeforeModelCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```go
func BeforeModelCallbackInput() CesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---


### CesGuardrailContentFilterOutputReference <a name="CesGuardrailContentFilterOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailContentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailContentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents">ResetBannedContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">ResetBannedContentsInAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">ResetBannedContentsInUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics">ResetDisregardDiacritics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBannedContents` <a name="ResetBannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```go
func ResetBannedContents()
```

##### `ResetBannedContentsInAgentResponse` <a name="ResetBannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```go
func ResetBannedContentsInAgentResponse()
```

##### `ResetBannedContentsInUserInput` <a name="ResetBannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```go
func ResetBannedContentsInUserInput()
```

##### `ResetDisregardDiacritics` <a name="ResetDisregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```go
func ResetDisregardDiacritics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">BannedContentsInAgentResponseInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput">BannedContentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">BannedContentsInUserInputInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">DisregardDiacriticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents">BannedContents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">BannedContentsInAgentResponse</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">BannedContentsInUserInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics">DisregardDiacritics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BannedContentsInAgentResponseInput`<sup>Optional</sup> <a name="BannedContentsInAgentResponseInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```go
func BannedContentsInAgentResponseInput() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInput`<sup>Optional</sup> <a name="BannedContentsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```go
func BannedContentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInUserInputInput`<sup>Optional</sup> <a name="BannedContentsInUserInputInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```go
func BannedContentsInUserInputInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisregardDiacriticsInput`<sup>Optional</sup> <a name="DisregardDiacriticsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```go
func DisregardDiacriticsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```go
func MatchTypeInput() *string
```

- *Type:* *string

---

##### `BannedContents`<sup>Required</sup> <a name="BannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```go
func BannedContents() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInAgentResponse`<sup>Required</sup> <a name="BannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```go
func BannedContentsInAgentResponse() *[]*string
```

- *Type:* *[]*string

---

##### `BannedContentsInUserInput`<sup>Required</sup> <a name="BannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```go
func BannedContentsInUserInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisregardDiacritics`<sup>Required</sup> <a name="DisregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```go
func DisregardDiacritics() interface{}
```

- *Type:* interface{}

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---


### CesGuardrailLlmPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailLlmPolicyModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailLlmPolicyModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---


### CesGuardrailLlmPolicyOutputReference <a name="CesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailLlmPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailLlmPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```go
func PutModelSettings(value CesGuardrailLlmPolicyModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```go
func ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```go
func ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```go
func ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```go
func ModelSettings() CesGuardrailLlmPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```go
func AllowShortUtteranceInput() interface{}
```

- *Type:* interface{}

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```go
func MaxConversationMessagesInput() *f64
```

- *Type:* *f64

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```go
func ModelSettingsInput() CesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```go
func PolicyScopeInput() *string
```

- *Type:* *string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```go
func PromptInput() *string
```

- *Type:* *string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```go
func AllowShortUtterance() interface{}
```

- *Type:* interface{}

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```go
func MaxConversationMessages() *f64
```

- *Type:* *f64

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```go
func PolicyScope() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailLlmPromptSecurityCustomPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailLlmPromptSecurityCustomPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">ResetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">ResetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```go
func PutModelSettings(value CesGuardrailLlmPromptSecurityCustomPolicyModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `ResetAllowShortUtterance` <a name="ResetAllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```go
func ResetAllowShortUtterance()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetMaxConversationMessages` <a name="ResetMaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```go
func ResetMaxConversationMessages()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```go
func ResetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">AllowShortUtteranceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">MaxConversationMessagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">PolicyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">PromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">AllowShortUtterance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">MaxConversationMessages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">PolicyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```go
func ModelSettings() CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `AllowShortUtteranceInput`<sup>Optional</sup> <a name="AllowShortUtteranceInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```go
func AllowShortUtteranceInput() interface{}
```

- *Type:* interface{}

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessagesInput`<sup>Optional</sup> <a name="MaxConversationMessagesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```go
func MaxConversationMessagesInput() *f64
```

- *Type:* *f64

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```go
func ModelSettingsInput() CesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `PolicyScopeInput`<sup>Optional</sup> <a name="PolicyScopeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```go
func PolicyScopeInput() *string
```

- *Type:* *string

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```go
func PromptInput() *string
```

- *Type:* *string

---

##### `AllowShortUtterance`<sup>Required</sup> <a name="AllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```go
func AllowShortUtterance() interface{}
```

- *Type:* interface{}

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `MaxConversationMessages`<sup>Required</sup> <a name="MaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```go
func MaxConversationMessages() *f64
```

- *Type:* *f64

---

##### `PolicyScope`<sup>Required</sup> <a name="PolicyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```go
func PolicyScope() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">DefaultPromptTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPromptTemplate`<sup>Required</sup> <a name="DefaultPromptTemplate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```go
func DefaultPromptTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### CesGuardrailLlmPromptSecurityOutputReference <a name="CesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailLlmPromptSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailLlmPromptSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">PutCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">PutDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">ResetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">ResetDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicy` <a name="PutCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```go
func PutCustomPolicy(value CesGuardrailLlmPromptSecurityCustomPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `PutDefaultSettings` <a name="PutDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```go
func PutDefaultSettings(value CesGuardrailLlmPromptSecurityDefaultSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `ResetCustomPolicy` <a name="ResetCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```go
func ResetCustomPolicy()
```

##### `ResetDefaultSettings` <a name="ResetDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```go
func ResetDefaultSettings()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">DefaultSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">CustomPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">DefaultSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```go
func CustomPolicy() CesGuardrailLlmPromptSecurityCustomPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `DefaultSettings`<sup>Required</sup> <a name="DefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```go
func DefaultSettings() CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `CustomPolicyInput`<sup>Optional</sup> <a name="CustomPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```go
func CustomPolicyInput() CesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `DefaultSettingsInput`<sup>Optional</sup> <a name="DefaultSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```go
func DefaultSettingsInput() CesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---


### CesGuardrailModelSafetyOutputReference <a name="CesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailModelSafetyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailModelSafetyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings">PutSafetySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSafetySettings` <a name="PutSafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```go
func PutSafetySettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings">SafetySettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput">SafetySettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SafetySettings`<sup>Required</sup> <a name="SafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```go
func SafetySettings() CesGuardrailModelSafetySafetySettingsList
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a>

---

##### `SafetySettingsInput`<sup>Optional</sup> <a name="SafetySettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```go
func SafetySettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```go
func InternalValue() CesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---


### CesGuardrailModelSafetySafetySettingsList <a name="CesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailModelSafetySafetySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesGuardrailModelSafetySafetySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get"></a>

```go
func Get(index *f64) CesGuardrailModelSafetySafetySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesGuardrailModelSafetySafetySettingsOutputReference <a name="CesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailModelSafetySafetySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesGuardrailModelSafetySafetySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesGuardrailTimeoutsOutputReference <a name="CesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cesguardrail"

cesguardrail.NewCesGuardrailTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesGuardrailTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



