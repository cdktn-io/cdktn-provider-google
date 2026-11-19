# `saasRuntimeUnitOperation` Submodule <a name="`saasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google.saasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitOperation <a name="SaasRuntimeUnitOperation" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperation(scope Construct, id *string, config SaasRuntimeUnitOperationConfig) SaasRuntimeUnitOperation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig">SaasRuntimeUnitOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig">SaasRuntimeUnitOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision">PutDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision">PutProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade">PutUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision">ResetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision">ResetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade">ResetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion">ResetWaitForCompletion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeprovision` <a name="PutDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision"></a>

```go
func PutDeprovision(value SaasRuntimeUnitOperationDeprovision)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `PutProvision` <a name="PutProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision"></a>

```go
func PutProvision(value SaasRuntimeUnitOperationProvision)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts"></a>

```go
func PutTimeouts(value SaasRuntimeUnitOperationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `PutUpgrade` <a name="PutUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade"></a>

```go
func PutUpgrade(value SaasRuntimeUnitOperationUpgrade)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeprovision` <a name="ResetDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision"></a>

```go
func ResetDeprovision()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProvision` <a name="ResetProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision"></a>

```go
func ResetProvision()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpgrade` <a name="ResetUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade"></a>

```go
func ResetUpgrade()
```

##### `ResetWaitForCompletion` <a name="ResetWaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```go
func ResetWaitForCompletion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.SaasRuntimeUnitOperation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.SaasRuntimeUnitOperation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.SaasRuntimeUnitOperation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.SaasRuntimeUnitOperation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SaasRuntimeUnitOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState">EngineState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory">ErrorCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput">DeprovisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput">ProvisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput">UnitOperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput">UpgradeInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput">WaitForCompletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId">UnitOperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion">WaitForCompletion</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions"></a>

```go
func Conditions() SaasRuntimeUnitOperationConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deprovision`<sup>Required</sup> <a name="Deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision"></a>

```go
func Deprovision() SaasRuntimeUnitOperationDeprovisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EngineState`<sup>Required</sup> <a name="EngineState" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState"></a>

```go
func EngineState() *string
```

- *Type:* *string

---

##### `ErrorCategory`<sup>Required</sup> <a name="ErrorCategory" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory"></a>

```go
func ErrorCategory() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Provision`<sup>Required</sup> <a name="Provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision"></a>

```go
func Provision() SaasRuntimeUnitOperationProvisionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts"></a>

```go
func Timeouts() SaasRuntimeUnitOperationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade"></a>

```go
func Upgrade() SaasRuntimeUnitOperationUpgradeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeprovisionInput`<sup>Optional</sup> <a name="DeprovisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput"></a>

```go
func DeprovisionInput() SaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProvisionInput`<sup>Optional</sup> <a name="ProvisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput"></a>

```go
func ProvisionInput() SaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `UnitOperationIdInput`<sup>Optional</sup> <a name="UnitOperationIdInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```go
func UnitOperationIdInput() *string
```

- *Type:* *string

---

##### `UpgradeInput`<sup>Optional</sup> <a name="UpgradeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput"></a>

```go
func UpgradeInput() SaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `WaitForCompletionInput`<sup>Optional</sup> <a name="WaitForCompletionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```go
func WaitForCompletionInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId"></a>

```go
func UnitOperationId() *string
```

- *Type:* *string

---

##### `WaitForCompletion`<sup>Required</sup> <a name="WaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion"></a>

```go
func WaitForCompletion() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitOperationConditions <a name="SaasRuntimeUnitOperationConditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationConditions {

}
```


### SaasRuntimeUnitOperationConfig <a name="SaasRuntimeUnitOperationConfig" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Unit: *string,
	UnitOperationId: *string,
	Annotations: *map[string]*string,
	DeletionPolicy: *string,
	Deprovision: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Provision: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts,
	Upgrade: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade,
	WaitForCompletion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit">Unit</a></code> | <code>*string</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId">UnitOperationId</a></code> | <code>*string</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision">Deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision">Provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion">WaitForCompletion</a></code> | <code>interface{}</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}

---

##### `UnitOperationId`<sup>Required</sup> <a name="UnitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```go
UnitOperationId *string
```

- *Type:* *string

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}

---

##### `Deprovision`<sup>Optional</sup> <a name="Deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision"></a>

```go
Deprovision SaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}.

---

##### `Provision`<sup>Optional</sup> <a name="Provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision"></a>

```go
Provision SaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts"></a>

```go
Timeouts SaasRuntimeUnitOperationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}

---

##### `Upgrade`<sup>Optional</sup> <a name="Upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade"></a>

```go
Upgrade SaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}

---

##### `WaitForCompletion`<sup>Optional</sup> <a name="WaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```go
WaitForCompletion interface{}
```

- *Type:* interface{}

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}

---

### SaasRuntimeUnitOperationDeprovision <a name="SaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationDeprovision {

}
```


### SaasRuntimeUnitOperationProvision <a name="SaasRuntimeUnitOperationProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationProvision {
	InputVariables: interface{},
	Release: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables">InputVariables</a></code> | <code>interface{}</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release">Release</a></code> | <code>*string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```go
InputVariables interface{}
```

- *Type:* interface{}

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release"></a>

```go
Release *string
```

- *Type:* *string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationProvisionInputVariables <a name="SaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationProvisionInputVariables {
	Variable: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable">Variable</a></code> | <code>*string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type">Type</a></code> | <code>*string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value">Value</a></code> | <code>*string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```go
Type *string
```

- *Type:* *string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

### SaasRuntimeUnitOperationTimeouts <a name="SaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}.

---

### SaasRuntimeUnitOperationUpgrade <a name="SaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationUpgrade {
	InputVariables: interface{},
	Release: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables">InputVariables</a></code> | <code>interface{}</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release">Release</a></code> | <code>*string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `InputVariables`<sup>Optional</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```go
InputVariables interface{}
```

- *Type:* interface{}

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `Release`<sup>Optional</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release"></a>

```go
Release *string
```

- *Type:* *string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationUpgradeInputVariables <a name="SaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

&saasruntimeunitoperation.SaasRuntimeUnitOperationUpgradeInputVariables {
	Variable: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable">Variable</a></code> | <code>*string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type">Type</a></code> | <code>*string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value">Value</a></code> | <code>*string</code> | String encoded value for the variable. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```go
Type *string
```

- *Type:* *string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitOperationConditionsList <a name="SaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitOperationConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitOperationConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SaasRuntimeUnitOperationConditionsOutputReference <a name="SaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitOperationConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitOperationConditions
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a>

---


### SaasRuntimeUnitOperationDeprovisionOutputReference <a name="SaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationDeprovisionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitOperationDeprovisionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitOperationDeprovision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---


### SaasRuntimeUnitOperationProvisionInputVariablesList <a name="SaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationProvisionInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitOperationProvisionInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitOperationProvisionInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="SaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationProvisionInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitOperationProvisionInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitOperationProvisionOutputReference <a name="SaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationProvisionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitOperationProvisionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```go
func PutInputVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```go
func ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```go
func ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release">Release</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```go
func InputVariables() SaasRuntimeUnitOperationProvisionInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```go
func InputVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```go
func ReleaseInput() *string
```

- *Type:* *string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```go
func Release() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitOperationProvision
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---


### SaasRuntimeUnitOperationTimeoutsOutputReference <a name="SaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitOperationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitOperationUpgradeInputVariablesList <a name="SaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationUpgradeInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitOperationUpgradeInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitOperationUpgradeOutputReference <a name="SaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitoperation"

saasruntimeunitoperation.NewSaasRuntimeUnitOperationUpgradeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitOperationUpgradeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">PutInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">ResetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">ResetRelease</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputVariables` <a name="PutInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```go
func PutInputVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInputVariables` <a name="ResetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```go
func ResetInputVariables()
```

##### `ResetRelease` <a name="ResetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```go
func ResetRelease()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">InputVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">ReleaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release">Release</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```go
func InputVariables() SaasRuntimeUnitOperationUpgradeInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `InputVariablesInput`<sup>Optional</sup> <a name="InputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```go
func InputVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `ReleaseInput`<sup>Optional</sup> <a name="ReleaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```go
func ReleaseInput() *string
```

- *Type:* *string

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```go
func Release() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitOperationUpgrade
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---



