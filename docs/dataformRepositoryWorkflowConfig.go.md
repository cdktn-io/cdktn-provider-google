# `dataformRepositoryWorkflowConfig` Submodule <a name="`dataformRepositoryWorkflowConfig` Submodule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryWorkflowConfig <a name="DataformRepositoryWorkflowConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config google_dataform_repository_workflow_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfig(scope Construct, id *string, config DataformRepositoryWorkflowConfigConfig) DataformRepositoryWorkflowConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig">DataformRepositoryWorkflowConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig">DataformRepositoryWorkflowConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig">PutInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule">ResetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig">ResetInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInvocationConfig` <a name="PutInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig"></a>

```go
func PutInvocationConfig(value DataformRepositoryWorkflowConfigInvocationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putInvocationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts"></a>

```go
func PutTimeouts(value DataformRepositoryWorkflowConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

---

##### `ResetCronSchedule` <a name="ResetCronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetCronSchedule"></a>

```go
func ResetCronSchedule()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetInvocationConfig` <a name="ResetInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetInvocationConfig"></a>

```go
func ResetInvocationConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataformRepositoryWorkflowConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataformRepositoryWorkflowConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataformRepositoryWorkflowConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryWorkflowConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig">InvocationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords">RecentScheduledExecutionRecords</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput">CronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput">InvocationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput">ReleaseConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig">ReleaseConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InvocationConfig`<sup>Required</sup> <a name="InvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfig"></a>

```go
func InvocationConfig() DataformRepositoryWorkflowConfigInvocationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference">DataformRepositoryWorkflowConfigInvocationConfigOutputReference</a>

---

##### `RecentScheduledExecutionRecords`<sup>Required</sup> <a name="RecentScheduledExecutionRecords" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.recentScheduledExecutionRecords"></a>

```go
func RecentScheduledExecutionRecords() DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeouts"></a>

```go
func Timeouts() DataformRepositoryWorkflowConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference">DataformRepositoryWorkflowConfigTimeoutsOutputReference</a>

---

##### `CronScheduleInput`<sup>Optional</sup> <a name="CronScheduleInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronScheduleInput"></a>

```go
func CronScheduleInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InvocationConfigInput`<sup>Optional</sup> <a name="InvocationConfigInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.invocationConfigInput"></a>

```go
func InvocationConfigInput() DataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReleaseConfigInput`<sup>Optional</sup> <a name="ReleaseConfigInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfigInput"></a>

```go
func ReleaseConfigInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `CronSchedule`<sup>Required</sup> <a name="CronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.cronSchedule"></a>

```go
func CronSchedule() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReleaseConfig`<sup>Required</sup> <a name="ReleaseConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.releaseConfig"></a>

```go
func ReleaseConfig() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryWorkflowConfigConfig <a name="DataformRepositoryWorkflowConfigConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

&dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ReleaseConfig: *string,
	CronSchedule: *string,
	DeletionPolicy: *string,
	Disabled: interface{},
	Id: *string,
	InvocationConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig,
	Project: *string,
	Region: *string,
	Repository: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name">Name</a></code> | <code>*string</code> | The workflow's name. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig">ReleaseConfig</a></code> | <code>*string</code> | The name of the release config whose releaseCompilationResult should be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Disables automatic creation of workflow invocations. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig">InvocationConfig</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | invocation_config block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region">Region</a></code> | <code>*string</code> | A reference to the region. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository">Repository</a></code> | <code>*string</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The workflow's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `ReleaseConfig`<sup>Required</sup> <a name="ReleaseConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.releaseConfig"></a>

```go
ReleaseConfig *string
```

- *Type:* *string

The name of the release config whose releaseCompilationResult should be executed.

Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#release_config DataformRepositoryWorkflowConfig#release_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `CronSchedule`<sup>Optional</sup> <a name="CronSchedule" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.cronSchedule"></a>

```go
CronSchedule *string
```

- *Type:* *string

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#cron_schedule DataformRepositoryWorkflowConfig#cron_schedule}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#deletion_policy DataformRepositoryWorkflowConfig#deletion_policy}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Disables automatic creation of workflow invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#disabled DataformRepositoryWorkflowConfig#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#id DataformRepositoryWorkflowConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InvocationConfig`<sup>Optional</sup> <a name="InvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.invocationConfig"></a>

```go
InvocationConfig DataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

invocation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#invocation_config DataformRepositoryWorkflowConfig#invocation_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#project DataformRepositoryWorkflowConfig#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#region DataformRepositoryWorkflowConfig#region}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#repository DataformRepositoryWorkflowConfig#repository}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeouts"></a>

```go
Timeouts DataformRepositoryWorkflowConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts">DataformRepositoryWorkflowConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#timeouts DataformRepositoryWorkflowConfig#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#time_zone DataformRepositoryWorkflowConfig#time_zone}

---

### DataformRepositoryWorkflowConfigInvocationConfig <a name="DataformRepositoryWorkflowConfigInvocationConfig" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

&dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfigInvocationConfig {
	FullyRefreshIncrementalTablesEnabled: interface{},
	IncludedTags: *[]*string,
	IncludedTargets: interface{},
	ServiceAccount: *string,
	TransitiveDependenciesIncluded: interface{},
	TransitiveDependentsIncluded: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled">FullyRefreshIncrementalTablesEnabled</a></code> | <code>interface{}</code> | Optional. When set to true, any incremental tables will be fully refreshed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags">IncludedTags</a></code> | <code>*[]*string</code> | Optional. The set of tags to include. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets">IncludedTargets</a></code> | <code>interface{}</code> | included_targets block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Optional. The service account to run workflow invocations under. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded">TransitiveDependenciesIncluded</a></code> | <code>interface{}</code> | Optional. When set to true, transitive dependencies of included actions will be executed. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded">TransitiveDependentsIncluded</a></code> | <code>interface{}</code> | Optional. When set to true, transitive dependents of included actions will be executed. |

---

##### `FullyRefreshIncrementalTablesEnabled`<sup>Optional</sup> <a name="FullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.fullyRefreshIncrementalTablesEnabled"></a>

```go
FullyRefreshIncrementalTablesEnabled interface{}
```

- *Type:* interface{}

Optional. When set to true, any incremental tables will be fully refreshed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled DataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}

---

##### `IncludedTags`<sup>Optional</sup> <a name="IncludedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTags"></a>

```go
IncludedTags *[]*string
```

- *Type:* *[]*string

Optional. The set of tags to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_tags DataformRepositoryWorkflowConfig#included_tags}

---

##### `IncludedTargets`<sup>Optional</sup> <a name="IncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.includedTargets"></a>

```go
IncludedTargets interface{}
```

- *Type:* interface{}

included_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#included_targets DataformRepositoryWorkflowConfig#included_targets}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Optional. The service account to run workflow invocations under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#service_account DataformRepositoryWorkflowConfig#service_account}

---

##### `TransitiveDependenciesIncluded`<sup>Optional</sup> <a name="TransitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependenciesIncluded"></a>

```go
TransitiveDependenciesIncluded interface{}
```

- *Type:* interface{}

Optional. When set to true, transitive dependencies of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependencies_included DataformRepositoryWorkflowConfig#transitive_dependencies_included}

---

##### `TransitiveDependentsIncluded`<sup>Optional</sup> <a name="TransitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig.property.transitiveDependentsIncluded"></a>

```go
TransitiveDependentsIncluded interface{}
```

- *Type:* interface{}

Optional. When set to true, transitive dependents of included actions will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#transitive_dependents_included DataformRepositoryWorkflowConfig#transitive_dependents_included}

---

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

&dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets {
	Database: *string,
	Name: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database">Database</a></code> | <code>*string</code> | The action's database (Google Cloud project ID). |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name">Name</a></code> | <code>*string</code> | The action's name, within database and schema. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema">Schema</a></code> | <code>*string</code> | The action's schema (BigQuery dataset ID), within database. |

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.database"></a>

```go
Database *string
```

- *Type:* *string

The action's database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#database DataformRepositoryWorkflowConfig#database}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.name"></a>

```go
Name *string
```

- *Type:* *string

The action's name, within database and schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#name DataformRepositoryWorkflowConfig#name}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargets.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The action's schema (BigQuery dataset ID), within database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#schema DataformRepositoryWorkflowConfig#schema}

---

### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

&dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords {

}
```


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

&dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus {

}
```


### DataformRepositoryWorkflowConfigTimeouts <a name="DataformRepositoryWorkflowConfigTimeouts" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

&dataformrepositoryworkflowconfig.DataformRepositoryWorkflowConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#create DataformRepositoryWorkflowConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#delete DataformRepositoryWorkflowConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_workflow_config#update DataformRepositoryWorkflowConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get"></a>

```go
func Get(index *f64) DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataformRepositoryWorkflowConfigInvocationConfigOutputReference <a name="DataformRepositoryWorkflowConfigInvocationConfigOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigInvocationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryWorkflowConfigInvocationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets">PutIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled">ResetFullyRefreshIncrementalTablesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags">ResetIncludedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets">ResetIncludedTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded">ResetTransitiveDependenciesIncluded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded">ResetTransitiveDependentsIncluded</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludedTargets` <a name="PutIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets"></a>

```go
func PutIncludedTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.putIncludedTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFullyRefreshIncrementalTablesEnabled` <a name="ResetFullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetFullyRefreshIncrementalTablesEnabled"></a>

```go
func ResetFullyRefreshIncrementalTablesEnabled()
```

##### `ResetIncludedTags` <a name="ResetIncludedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTags"></a>

```go
func ResetIncludedTags()
```

##### `ResetIncludedTargets` <a name="ResetIncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetIncludedTargets"></a>

```go
func ResetIncludedTargets()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTransitiveDependenciesIncluded` <a name="ResetTransitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependenciesIncluded"></a>

```go
func ResetTransitiveDependenciesIncluded()
```

##### `ResetTransitiveDependentsIncluded` <a name="ResetTransitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.resetTransitiveDependentsIncluded"></a>

```go
func ResetTransitiveDependentsIncluded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets">IncludedTargets</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput">FullyRefreshIncrementalTablesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput">IncludedTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput">IncludedTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput">TransitiveDependenciesIncludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput">TransitiveDependentsIncludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled">FullyRefreshIncrementalTablesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags">IncludedTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded">TransitiveDependenciesIncluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded">TransitiveDependentsIncluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedTargets`<sup>Required</sup> <a name="IncludedTargets" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargets"></a>

```go
func IncludedTargets() DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList">DataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList</a>

---

##### `FullyRefreshIncrementalTablesEnabledInput`<sup>Optional</sup> <a name="FullyRefreshIncrementalTablesEnabledInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabledInput"></a>

```go
func FullyRefreshIncrementalTablesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IncludedTagsInput`<sup>Optional</sup> <a name="IncludedTagsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTagsInput"></a>

```go
func IncludedTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedTargetsInput`<sup>Optional</sup> <a name="IncludedTargetsInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTargetsInput"></a>

```go
func IncludedTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TransitiveDependenciesIncludedInput`<sup>Optional</sup> <a name="TransitiveDependenciesIncludedInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncludedInput"></a>

```go
func TransitiveDependenciesIncludedInput() interface{}
```

- *Type:* interface{}

---

##### `TransitiveDependentsIncludedInput`<sup>Optional</sup> <a name="TransitiveDependentsIncludedInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncludedInput"></a>

```go
func TransitiveDependentsIncludedInput() interface{}
```

- *Type:* interface{}

---

##### `FullyRefreshIncrementalTablesEnabled`<sup>Required</sup> <a name="FullyRefreshIncrementalTablesEnabled" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.fullyRefreshIncrementalTablesEnabled"></a>

```go
func FullyRefreshIncrementalTablesEnabled() interface{}
```

- *Type:* interface{}

---

##### `IncludedTags`<sup>Required</sup> <a name="IncludedTags" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.includedTags"></a>

```go
func IncludedTags() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TransitiveDependenciesIncluded`<sup>Required</sup> <a name="TransitiveDependenciesIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependenciesIncluded"></a>

```go
func TransitiveDependenciesIncluded() interface{}
```

- *Type:* interface{}

---

##### `TransitiveDependentsIncluded`<sup>Required</sup> <a name="TransitiveDependentsIncluded" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.transitiveDependentsIncluded"></a>

```go
func TransitiveDependentsIncluded() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryWorkflowConfigInvocationConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigInvocationConfig">DataformRepositoryWorkflowConfigInvocationConfig</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get"></a>

```go
func Get(index *f64) DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus</a>

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get"></a>

```go
func Get(index *f64) DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference <a name="DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus">ErrorStatus</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime">ExecutionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation">WorkflowInvocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.errorStatus"></a>

```go
func ErrorStatus() DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList</a>

---

##### `ExecutionTime`<sup>Required</sup> <a name="ExecutionTime" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.executionTime"></a>

```go
func ExecutionTime() *string
```

- *Type:* *string

---

##### `WorkflowInvocation`<sup>Required</sup> <a name="WorkflowInvocation" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.workflowInvocation"></a>

```go
func WorkflowInvocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords">DataformRepositoryWorkflowConfigRecentScheduledExecutionRecords</a>

---


### DataformRepositoryWorkflowConfigTimeoutsOutputReference <a name="DataformRepositoryWorkflowConfigTimeoutsOutputReference" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/dataformrepositoryworkflowconfig"

dataformrepositoryworkflowconfig.NewDataformRepositoryWorkflowConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataformRepositoryWorkflowConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataformRepositoryWorkflowConfig.DataformRepositoryWorkflowConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



