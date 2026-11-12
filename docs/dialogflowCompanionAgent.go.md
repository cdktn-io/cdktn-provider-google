# `dialogflowCompanionAgent` Submodule <a name="`dialogflowCompanionAgent` Submodule" id="@cdktn/provider-google.dialogflowCompanionAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCompanionAgent <a name="DialogflowCompanionAgent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent google_dialogflow_companion_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgent(scope Construct, id *string, config DialogflowCompanionAgentConfig) DialogflowCompanionAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig">DialogflowCompanionAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig">DialogflowCompanionAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs">PutCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs">PutSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools">PutToolsetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetCesToolSpecs">ResetCesToolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetSkillConfigs">ResetSkillConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetToolsetTools">ResetToolsetTools</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCesToolSpecs` <a name="PutCesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs"></a>

```go
func PutCesToolSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putCesToolSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSkillConfigs` <a name="PutSkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs"></a>

```go
func PutSkillConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putSkillConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowCompanionAgentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

---

##### `PutToolsetTools` <a name="PutToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools"></a>

```go
func PutToolsetTools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.putToolsetTools.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCesToolSpecs` <a name="ResetCesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetCesToolSpecs"></a>

```go
func ResetCesToolSpecs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSkillConfigs` <a name="ResetSkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetSkillConfigs"></a>

```go
func ResetSkillConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetToolsetTools` <a name="ResetToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.resetToolsetTools"></a>

```go
func ResetToolsetTools()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowCompanionAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.DialogflowCompanionAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.DialogflowCompanionAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.DialogflowCompanionAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.DialogflowCompanionAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DialogflowCompanionAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DialogflowCompanionAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DialogflowCompanionAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowCompanionAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecs">CesToolSpecs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList">DialogflowCompanionAgentCesToolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigs">SkillConfigs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList">DialogflowCompanionAgentSkillConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference">DialogflowCompanionAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetTools">ToolsetTools</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList">DialogflowCompanionAgentToolsetToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecsInput">CesToolSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentIdInput">CompanionAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigsInput">SkillConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetToolsInput">ToolsetToolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentId">CompanionAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CesToolSpecs`<sup>Required</sup> <a name="CesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecs"></a>

```go
func CesToolSpecs() DialogflowCompanionAgentCesToolSpecsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList">DialogflowCompanionAgentCesToolSpecsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SkillConfigs`<sup>Required</sup> <a name="SkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigs"></a>

```go
func SkillConfigs() DialogflowCompanionAgentSkillConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList">DialogflowCompanionAgentSkillConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeouts"></a>

```go
func Timeouts() DialogflowCompanionAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference">DialogflowCompanionAgentTimeoutsOutputReference</a>

---

##### `ToolsetTools`<sup>Required</sup> <a name="ToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetTools"></a>

```go
func ToolsetTools() DialogflowCompanionAgentToolsetToolsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList">DialogflowCompanionAgentToolsetToolsList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CesToolSpecsInput`<sup>Optional</sup> <a name="CesToolSpecsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.cesToolSpecsInput"></a>

```go
func CesToolSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `CompanionAgentIdInput`<sup>Optional</sup> <a name="CompanionAgentIdInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentIdInput"></a>

```go
func CompanionAgentIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SkillConfigsInput`<sup>Optional</sup> <a name="SkillConfigsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.skillConfigsInput"></a>

```go
func SkillConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsetToolsInput`<sup>Optional</sup> <a name="ToolsetToolsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.toolsetToolsInput"></a>

```go
func ToolsetToolsInput() interface{}
```

- *Type:* interface{}

---

##### `CompanionAgentId`<sup>Required</sup> <a name="CompanionAgentId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.companionAgentId"></a>

```go
func CompanionAgentId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCompanionAgentCesToolSpecs <a name="DialogflowCompanionAgentCesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentCesToolSpecs {
	CesTool: *string,
	ConfirmationRequirement: *string,
	ParameterOverrides: interface{},
	ProactiveEnabled: interface{},
	ReactiveEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.cesTool">CesTool</a></code> | <code>*string</code> | The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.parameterOverrides">ParameterOverrides</a></code> | <code>interface{}</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the tool is enabled in reactive mode. |

---

##### `CesTool`<sup>Optional</sup> <a name="CesTool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.cesTool"></a>

```go
CesTool *string
```

- *Type:* *string

The resource name of the CES tool. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool DialogflowCompanionAgent#ces_tool}

---

##### `ConfirmationRequirement`<sup>Optional</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.confirmationRequirement"></a>

```go
ConfirmationRequirement *string
```

- *Type:* *string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.parameterOverrides"></a>

```go
ParameterOverrides interface{}
```

- *Type:* interface{}

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}

---

##### `ProactiveEnabled`<sup>Optional</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.proactiveEnabled"></a>

```go
ProactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the tool is enabled in proactive mode.

All tools are enabled in proactive mode by default. To disable a tool in proactive mode, set this field to 'false'.
NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}

---

##### `ReactiveEnabled`<sup>Optional</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecs.property.reactiveEnabled"></a>

```go
ReactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the tool is enabled in reactive mode.

All tools are disabled in reactive mode by default. To enable a tool in reactive mode, set this field to 'true'.
NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the tool will be ignored. CompanionAgent config will throw an error if any unsupported tool is enabled in reactive mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}

---

### DialogflowCompanionAgentCesToolSpecsParameterOverrides <a name="DialogflowCompanionAgentCesToolSpecsParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentCesToolSpecsParameterOverrides {
	ContextReferenceKey: *string,
	ParameterName: *string,
	FieldPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName">ParameterName</a></code> | <code>*string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.contextReferenceKey"></a>

```go
ContextReferenceKey *string
```

- *Type:* *string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverrides.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}

---

### DialogflowCompanionAgentConfig <a name="DialogflowCompanionAgentConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CompanionAgentId: *string,
	Location: *string,
	CesToolSpecs: interface{},
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	SkillConfigs: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts,
	ToolsetTools: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.companionAgentId">CompanionAgentId</a></code> | <code>*string</code> | The ID to use for the companion agent, which will become the final component of the companion agent's resource name. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.location">Location</a></code> | <code>*string</code> | The location of the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.cesToolSpecs">CesToolSpecs</a></code> | <code>interface{}</code> | ces_tool_specs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.description">Description</a></code> | <code>*string</code> | Description for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name for the companion agent. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.skillConfigs">SkillConfigs</a></code> | <code>interface{}</code> | skill_configs block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.toolsetTools">ToolsetTools</a></code> | <code>interface{}</code> | toolset_tools block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompanionAgentId`<sup>Required</sup> <a name="CompanionAgentId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.companionAgentId"></a>

```go
CompanionAgentId *string
```

- *Type:* *string

The ID to use for the companion agent, which will become the final component of the companion agent's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#companion_agent_id DialogflowCompanionAgent#companion_agent_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#location DialogflowCompanionAgent#location}

---

##### `CesToolSpecs`<sup>Optional</sup> <a name="CesToolSpecs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.cesToolSpecs"></a>

```go
CesToolSpecs interface{}
```

- *Type:* interface{}

ces_tool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#ces_tool_specs DialogflowCompanionAgent#ces_tool_specs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#deletion_policy DialogflowCompanionAgent#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name for the companion agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#id DialogflowCompanionAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#project DialogflowCompanionAgent#project}.

---

##### `SkillConfigs`<sup>Optional</sup> <a name="SkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.skillConfigs"></a>

```go
SkillConfigs interface{}
```

- *Type:* interface{}

skill_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_configs DialogflowCompanionAgent#skill_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.timeouts"></a>

```go
Timeouts DialogflowCompanionAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts">DialogflowCompanionAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#timeouts DialogflowCompanionAgent#timeouts}

---

##### `ToolsetTools`<sup>Optional</sup> <a name="ToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentConfig.property.toolsetTools"></a>

```go
ToolsetTools interface{}
```

- *Type:* interface{}

toolset_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset_tools DialogflowCompanionAgent#toolset_tools}

---

### DialogflowCompanionAgentSkillConfigs <a name="DialogflowCompanionAgentSkillConfigs" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentSkillConfigs {
	GuidanceSkillConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig,
	SkillTriggeringEvent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig">GuidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | guidance_skill_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent">SkillTriggeringEvent</a></code> | <code>*string</code> | The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `GuidanceSkillConfig`<sup>Optional</sup> <a name="GuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.guidanceSkillConfig"></a>

```go
GuidanceSkillConfig DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

guidance_skill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_skill_config DialogflowCompanionAgent#guidance_skill_config}

---

##### `SkillTriggeringEvent`<sup>Optional</sup> <a name="SkillTriggeringEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigs.property.skillTriggeringEvent"></a>

```go
SkillTriggeringEvent *string
```

- *Type:* *string

The event that should trigger the skill. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#skill_triggering_event DialogflowCompanionAgent#skill_triggering_event}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig {
	GuidanceInstructions: interface{},
	OverarchingGuidance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions">GuidanceInstructions</a></code> | <code>interface{}</code> | guidance_instructions block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance">OverarchingGuidance</a></code> | <code>*string</code> | This is specific additional guidance that can be configured by the user. |

---

##### `GuidanceInstructions`<sup>Optional</sup> <a name="GuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.guidanceInstructions"></a>

```go
GuidanceInstructions interface{}
```

- *Type:* interface{}

guidance_instructions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#guidance_instructions DialogflowCompanionAgent#guidance_instructions}

---

##### `OverarchingGuidance`<sup>Optional</sup> <a name="OverarchingGuidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig.property.overarchingGuidance"></a>

```go
OverarchingGuidance *string
```

- *Type:* *string

This is specific additional guidance that can be configured by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#overarching_guidance DialogflowCompanionAgent#overarching_guidance}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions {
	Actions: interface{},
	Condition: *string,
	DisableSuggestedReply: interface{},
	DisplayDetails: *string,
	DisplayName: *string,
	TriggerEvent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition">Condition</a></code> | <code>*string</code> | The condition of the instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply">DisableSuggestedReply</a></code> | <code>interface{}</code> | Whether to disable suggested reply generation for this instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails">DisplayDetails</a></code> | <code>*string</code> | The detailed description of this instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name for the instruction. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent">TriggerEvent</a></code> | <code>*string</code> | Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#actions DialogflowCompanionAgent#actions}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition of the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#condition DialogflowCompanionAgent#condition}

---

##### `DisableSuggestedReply`<sup>Optional</sup> <a name="DisableSuggestedReply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.disableSuggestedReply"></a>

```go
DisableSuggestedReply interface{}
```

- *Type:* interface{}

Whether to disable suggested reply generation for this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#disable_suggested_reply DialogflowCompanionAgent#disable_suggested_reply}

---

##### `DisplayDetails`<sup>Optional</sup> <a name="DisplayDetails" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayDetails"></a>

```go
DisplayDetails *string
```

- *Type:* *string

The detailed description of this instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_details DialogflowCompanionAgent#display_details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name for the instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#display_name DialogflowCompanionAgent#display_name}

---

##### `TriggerEvent`<sup>Optional</sup> <a name="TriggerEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructions.property.triggerEvent"></a>

```go
TriggerEvent *string
```

- *Type:* *string

Event that triggers the guidance instruction. Possible values: ["END_OF_UTTERANCE", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#trigger_event DialogflowCompanionAgent#trigger_event}

---

### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions {
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description">Description</a></code> | <code>*string</code> | Description of action item. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of action item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#description DialogflowCompanionAgent#description}

---

### DialogflowCompanionAgentTimeouts <a name="DialogflowCompanionAgentTimeouts" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#create DialogflowCompanionAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#delete DialogflowCompanionAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#update DialogflowCompanionAgent#update}.

---

### DialogflowCompanionAgentToolsetTools <a name="DialogflowCompanionAgentToolsetTools" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentToolsetTools {
	Toolset: *string,
	ConfirmationRequirement: *string,
	OperationId: *string,
	ParameterOverrides: interface{},
	ProactiveEnabled: interface{},
	ReactiveEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.toolset">Toolset</a></code> | <code>*string</code> | The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"]. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.operationId">OperationId</a></code> | <code>*string</code> | The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.parameterOverrides">ParameterOverrides</a></code> | <code>interface{}</code> | parameter_overrides block. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the toolset tool is enabled in proactive mode. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | Indicates whether the toolset tool is enabled in reactive mode. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The name of the toolset to retrieve the schema for. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#toolset DialogflowCompanionAgent#toolset}

---

##### `ConfirmationRequirement`<sup>Optional</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.confirmationRequirement"></a>

```go
ConfirmationRequirement *string
```

- *Type:* *string

Indicates whether the tool requires human confirmation. Possible values: ["REQUIRED", "NOT_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#confirmation_requirement DialogflowCompanionAgent#confirmation_requirement}

---

##### `OperationId`<sup>Optional</sup> <a name="OperationId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.operationId"></a>

```go
OperationId *string
```

- *Type:* *string

The 'operationId' field of the OpenAPI endpoint. The 'operationId' must be present in the toolset's definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#operation_id DialogflowCompanionAgent#operation_id}

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.parameterOverrides"></a>

```go
ParameterOverrides interface{}
```

- *Type:* interface{}

parameter_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_overrides DialogflowCompanionAgent#parameter_overrides}

---

##### `ProactiveEnabled`<sup>Optional</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.proactiveEnabled"></a>

```go
ProactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the toolset tool is enabled in proactive mode.

NOTE: At least one of 'proactive_enabled' or 'reactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#proactive_enabled DialogflowCompanionAgent#proactive_enabled}

---

##### `ReactiveEnabled`<sup>Optional</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetTools.property.reactiveEnabled"></a>

```go
ReactiveEnabled interface{}
```

- *Type:* interface{}

Indicates whether the toolset tool is enabled in reactive mode.

NOTE: At least one of 'reactive_enabled' or 'proactive_enabled' should be 'true' else the toolset tool will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#reactive_enabled DialogflowCompanionAgent#reactive_enabled}

---

### DialogflowCompanionAgentToolsetToolsParameterOverrides <a name="DialogflowCompanionAgentToolsetToolsParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

&dialogflowcompanionagent.DialogflowCompanionAgentToolsetToolsParameterOverrides {
	ContextReferenceKey: *string,
	ParameterName: *string,
	FieldPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | The key of the context reference in ingested context references. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName">ParameterName</a></code> | <code>*string</code> | The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it). |

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.contextReferenceKey"></a>

```go
ContextReferenceKey *string
```

- *Type:* *string

The key of the context reference in ingested context references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#context_reference_key DialogflowCompanionAgent#context_reference_key}

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

The name of the tool input parameter to override, as defined in the tool's input schema. For example, 'user_email'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#parameter_name DialogflowCompanionAgent#parameter_name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverrides.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The path into the JSON object of the latest content ingested under 'context_reference_key' (e.g. 'email' or 'user.email'). If omitted, the entire content under 'context_reference_key' is used. If the path cannot be resolved when the tool is called, the value predicted by the model is used (or omitted if the model did not predict it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dialogflow_companion_agent#field_path DialogflowCompanionAgent#field_path}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCompanionAgentCesToolSpecsList <a name="DialogflowCompanionAgentCesToolSpecsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentCesToolSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCompanionAgentCesToolSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get"></a>

```go
func Get(index *f64) DialogflowCompanionAgentCesToolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentCesToolSpecsOutputReference <a name="DialogflowCompanionAgentCesToolSpecsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentCesToolSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCompanionAgentCesToolSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides">PutParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool">ResetCesTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement">ResetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled">ResetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled">ResetReactiveEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterOverrides` <a name="PutParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides"></a>

```go
func PutParameterOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCesTool` <a name="ResetCesTool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetCesTool"></a>

```go
func ResetCesTool()
```

##### `ResetConfirmationRequirement` <a name="ResetConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetConfirmationRequirement"></a>

```go
func ResetConfirmationRequirement()
```

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetParameterOverrides"></a>

```go
func ResetParameterOverrides()
```

##### `ResetProactiveEnabled` <a name="ResetProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetProactiveEnabled"></a>

```go
func ResetProactiveEnabled()
```

##### `ResetReactiveEnabled` <a name="ResetReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.resetReactiveEnabled"></a>

```go
func ResetReactiveEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides">ParameterOverrides</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList">DialogflowCompanionAgentCesToolSpecsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput">CesToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput">ConfirmationRequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput">ProactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput">ReactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool">CesTool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverrides"></a>

```go
func ParameterOverrides() DialogflowCompanionAgentCesToolSpecsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList">DialogflowCompanionAgentCesToolSpecsParameterOverridesList</a>

---

##### `CesToolInput`<sup>Optional</sup> <a name="CesToolInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesToolInput"></a>

```go
func CesToolInput() *string
```

- *Type:* *string

---

##### `ConfirmationRequirementInput`<sup>Optional</sup> <a name="ConfirmationRequirementInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirementInput"></a>

```go
func ConfirmationRequirementInput() *string
```

- *Type:* *string

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.parameterOverridesInput"></a>

```go
func ParameterOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveEnabledInput`<sup>Optional</sup> <a name="ProactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabledInput"></a>

```go
func ProactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabledInput`<sup>Optional</sup> <a name="ReactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabledInput"></a>

```go
func ReactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CesTool`<sup>Required</sup> <a name="CesTool" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.cesTool"></a>

```go
func CesTool() *string
```

- *Type:* *string

---

##### `ConfirmationRequirement`<sup>Required</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.confirmationRequirement"></a>

```go
func ConfirmationRequirement() *string
```

- *Type:* *string

---

##### `ProactiveEnabled`<sup>Required</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.proactiveEnabled"></a>

```go
func ProactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabled`<sup>Required</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.reactiveEnabled"></a>

```go
func ReactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentCesToolSpecsParameterOverridesList <a name="DialogflowCompanionAgentCesToolSpecsParameterOverridesList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentCesToolSpecsParameterOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCompanionAgentCesToolSpecsParameterOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get"></a>

```go
func Get(index *f64) DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference <a name="DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput">ContextReferenceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextReferenceKeyInput`<sup>Optional</sup> <a name="ContextReferenceKeyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```go
func ContextReferenceKeyInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```go
func ContextReferenceKey() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentCesToolSpecsParameterOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get"></a>

```go
func Get(index *f64) DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get"></a>

```go
func Get(index *f64) DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply">ResetDisableSuggestedReply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails">ResetDisplayDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent">ResetTriggerEvent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDisableSuggestedReply` <a name="ResetDisableSuggestedReply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisableSuggestedReply"></a>

```go
func ResetDisableSuggestedReply()
```

##### `ResetDisplayDetails` <a name="ResetDisplayDetails" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayDetails"></a>

```go
func ResetDisplayDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetTriggerEvent` <a name="ResetTriggerEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.resetTriggerEvent"></a>

```go
func ResetTriggerEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput">DisableSuggestedReplyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput">DisplayDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput">TriggerEventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply">DisableSuggestedReply</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails">DisplayDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent">TriggerEvent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actions"></a>

```go
func Actions() DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsActionsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `DisableSuggestedReplyInput`<sup>Optional</sup> <a name="DisableSuggestedReplyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReplyInput"></a>

```go
func DisableSuggestedReplyInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayDetailsInput`<sup>Optional</sup> <a name="DisplayDetailsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetailsInput"></a>

```go
func DisplayDetailsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `TriggerEventInput`<sup>Optional</sup> <a name="TriggerEventInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEventInput"></a>

```go
func TriggerEventInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `DisableSuggestedReply`<sup>Required</sup> <a name="DisableSuggestedReply" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.disableSuggestedReply"></a>

```go
func DisableSuggestedReply() interface{}
```

- *Type:* interface{}

---

##### `DisplayDetails`<sup>Required</sup> <a name="DisplayDetails" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayDetails"></a>

```go
func DisplayDetails() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TriggerEvent`<sup>Required</sup> <a name="TriggerEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.triggerEvent"></a>

```go
func TriggerEvent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference <a name="DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions">PutGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions">ResetGuidanceInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance">ResetOverarchingGuidance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuidanceInstructions` <a name="PutGuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions"></a>

```go
func PutGuidanceInstructions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.putGuidanceInstructions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuidanceInstructions` <a name="ResetGuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetGuidanceInstructions"></a>

```go
func ResetGuidanceInstructions()
```

##### `ResetOverarchingGuidance` <a name="ResetOverarchingGuidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.resetOverarchingGuidance"></a>

```go
func ResetOverarchingGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions">GuidanceInstructions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput">GuidanceInstructionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput">OverarchingGuidanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance">OverarchingGuidance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuidanceInstructions`<sup>Required</sup> <a name="GuidanceInstructions" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructions"></a>

```go
func GuidanceInstructions() DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigGuidanceInstructionsList</a>

---

##### `GuidanceInstructionsInput`<sup>Optional</sup> <a name="GuidanceInstructionsInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.guidanceInstructionsInput"></a>

```go
func GuidanceInstructionsInput() interface{}
```

- *Type:* interface{}

---

##### `OverarchingGuidanceInput`<sup>Optional</sup> <a name="OverarchingGuidanceInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidanceInput"></a>

```go
func OverarchingGuidanceInput() *string
```

- *Type:* *string

---

##### `OverarchingGuidance`<sup>Required</sup> <a name="OverarchingGuidance" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.overarchingGuidance"></a>

```go
func OverarchingGuidance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---


### DialogflowCompanionAgentSkillConfigsList <a name="DialogflowCompanionAgentSkillConfigsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentSkillConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCompanionAgentSkillConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get"></a>

```go
func Get(index *f64) DialogflowCompanionAgentSkillConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentSkillConfigsOutputReference <a name="DialogflowCompanionAgentSkillConfigsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentSkillConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCompanionAgentSkillConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig">PutGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig">ResetGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent">ResetSkillTriggeringEvent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuidanceSkillConfig` <a name="PutGuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig"></a>

```go
func PutGuidanceSkillConfig(value DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.putGuidanceSkillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `ResetGuidanceSkillConfig` <a name="ResetGuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetGuidanceSkillConfig"></a>

```go
func ResetGuidanceSkillConfig()
```

##### `ResetSkillTriggeringEvent` <a name="ResetSkillTriggeringEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.resetSkillTriggeringEvent"></a>

```go
func ResetSkillTriggeringEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig">GuidanceSkillConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput">GuidanceSkillConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput">SkillTriggeringEventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent">SkillTriggeringEvent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuidanceSkillConfig`<sup>Required</sup> <a name="GuidanceSkillConfig" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfig"></a>

```go
func GuidanceSkillConfig() DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfigOutputReference</a>

---

##### `GuidanceSkillConfigInput`<sup>Optional</sup> <a name="GuidanceSkillConfigInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.guidanceSkillConfigInput"></a>

```go
func GuidanceSkillConfigInput() DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig">DialogflowCompanionAgentSkillConfigsGuidanceSkillConfig</a>

---

##### `SkillTriggeringEventInput`<sup>Optional</sup> <a name="SkillTriggeringEventInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEventInput"></a>

```go
func SkillTriggeringEventInput() *string
```

- *Type:* *string

---

##### `SkillTriggeringEvent`<sup>Required</sup> <a name="SkillTriggeringEvent" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.skillTriggeringEvent"></a>

```go
func SkillTriggeringEvent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentSkillConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentTimeoutsOutputReference <a name="DialogflowCompanionAgentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCompanionAgentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentToolsetToolsList <a name="DialogflowCompanionAgentToolsetToolsList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentToolsetToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCompanionAgentToolsetToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get"></a>

```go
func Get(index *f64) DialogflowCompanionAgentToolsetToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentToolsetToolsOutputReference <a name="DialogflowCompanionAgentToolsetToolsOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentToolsetToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCompanionAgentToolsetToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides">PutParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement">ResetConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId">ResetOperationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled">ResetProactiveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled">ResetReactiveEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterOverrides` <a name="PutParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides"></a>

```go
func PutParameterOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfirmationRequirement` <a name="ResetConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetConfirmationRequirement"></a>

```go
func ResetConfirmationRequirement()
```

##### `ResetOperationId` <a name="ResetOperationId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetOperationId"></a>

```go
func ResetOperationId()
```

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetParameterOverrides"></a>

```go
func ResetParameterOverrides()
```

##### `ResetProactiveEnabled` <a name="ResetProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetProactiveEnabled"></a>

```go
func ResetProactiveEnabled()
```

##### `ResetReactiveEnabled` <a name="ResetReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.resetReactiveEnabled"></a>

```go
func ResetReactiveEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides">ParameterOverrides</a></code> | <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList">DialogflowCompanionAgentToolsetToolsParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput">ConfirmationRequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput">OperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput">ProactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput">ReactiveEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement">ConfirmationRequirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled">ProactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled">ReactiveEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverrides"></a>

```go
func ParameterOverrides() DialogflowCompanionAgentToolsetToolsParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList">DialogflowCompanionAgentToolsetToolsParameterOverridesList</a>

---

##### `ConfirmationRequirementInput`<sup>Optional</sup> <a name="ConfirmationRequirementInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirementInput"></a>

```go
func ConfirmationRequirementInput() *string
```

- *Type:* *string

---

##### `OperationIdInput`<sup>Optional</sup> <a name="OperationIdInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationIdInput"></a>

```go
func OperationIdInput() *string
```

- *Type:* *string

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.parameterOverridesInput"></a>

```go
func ParameterOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveEnabledInput`<sup>Optional</sup> <a name="ProactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabledInput"></a>

```go
func ProactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabledInput`<sup>Optional</sup> <a name="ReactiveEnabledInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabledInput"></a>

```go
func ReactiveEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ConfirmationRequirement`<sup>Required</sup> <a name="ConfirmationRequirement" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.confirmationRequirement"></a>

```go
func ConfirmationRequirement() *string
```

- *Type:* *string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `ProactiveEnabled`<sup>Required</sup> <a name="ProactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.proactiveEnabled"></a>

```go
func ProactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `ReactiveEnabled`<sup>Required</sup> <a name="ReactiveEnabled" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.reactiveEnabled"></a>

```go
func ReactiveEnabled() interface{}
```

- *Type:* interface{}

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentToolsetToolsParameterOverridesList <a name="DialogflowCompanionAgentToolsetToolsParameterOverridesList" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentToolsetToolsParameterOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCompanionAgentToolsetToolsParameterOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get"></a>

```go
func Get(index *f64) DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference <a name="DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dialogflowcompanionagent"

dialogflowcompanionagent.NewDialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput">ContextReferenceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey">ContextReferenceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextReferenceKeyInput`<sup>Optional</sup> <a name="ContextReferenceKeyInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKeyInput"></a>

```go
func ContextReferenceKeyInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ContextReferenceKey`<sup>Required</sup> <a name="ContextReferenceKey" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.contextReferenceKey"></a>

```go
func ContextReferenceKey() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowCompanionAgent.DialogflowCompanionAgentToolsetToolsParameterOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



