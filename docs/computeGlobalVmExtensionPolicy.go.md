# `computeGlobalVmExtensionPolicy` Submodule <a name="`computeGlobalVmExtensionPolicy` Submodule" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalVmExtensionPolicy <a name="ComputeGlobalVmExtensionPolicy" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy google_compute_global_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicy(scope Construct, id *string, config ComputeGlobalVmExtensionPolicyConfig) ComputeGlobalVmExtensionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig">ComputeGlobalVmExtensionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig">ComputeGlobalVmExtensionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putExtensionPolicies">PutExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putInstanceSelectors">PutInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putRolloutOperation">PutRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetInstanceSelectors">ResetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionPolicies` <a name="PutExtensionPolicies" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putExtensionPolicies"></a>

```go
func PutExtensionPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstanceSelectors` <a name="PutInstanceSelectors" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putInstanceSelectors"></a>

```go
func PutInstanceSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRolloutOperation` <a name="PutRolloutOperation" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putRolloutOperation"></a>

```go
func PutRolloutOperation(value ComputeGlobalVmExtensionPolicyRolloutOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putRolloutOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation">ComputeGlobalVmExtensionPolicyRolloutOperation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeGlobalVmExtensionPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts">ComputeGlobalVmExtensionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInstanceSelectors` <a name="ResetInstanceSelectors" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetInstanceSelectors"></a>

```go
func ResetInstanceSelectors()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeGlobalVmExtensionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeGlobalVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeGlobalVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.extensionPolicies">ExtensionPolicies</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList">ComputeGlobalVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.instanceSelectors">InstanceSelectors</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList">ComputeGlobalVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.scopedResourceStatus">ScopedResourceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference">ComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.updateTimestamp">UpdateTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput">ExtensionPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput">InstanceSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.rolloutOperationInput">RolloutOperationInput</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation">ComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.extensionPolicies"></a>

```go
func ExtensionPolicies() ComputeGlobalVmExtensionPolicyExtensionPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList">ComputeGlobalVmExtensionPolicyExtensionPoliciesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceSelectors`<sup>Required</sup> <a name="InstanceSelectors" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.instanceSelectors"></a>

```go
func InstanceSelectors() ComputeGlobalVmExtensionPolicyInstanceSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList">ComputeGlobalVmExtensionPolicyInstanceSelectorsList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.rolloutOperation"></a>

```go
func RolloutOperation() ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a>

---

##### `ScopedResourceStatus`<sup>Required</sup> <a name="ScopedResourceStatus" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.scopedResourceStatus"></a>

```go
func ScopedResourceStatus() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.timeouts"></a>

```go
func Timeouts() ComputeGlobalVmExtensionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference">ComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTimestamp`<sup>Required</sup> <a name="UpdateTimestamp" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.updateTimestamp"></a>

```go
func UpdateTimestamp() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionPoliciesInput`<sup>Optional</sup> <a name="ExtensionPoliciesInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput"></a>

```go
func ExtensionPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceSelectorsInput`<sup>Optional</sup> <a name="InstanceSelectorsInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput"></a>

```go
func InstanceSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutOperationInput`<sup>Optional</sup> <a name="RolloutOperationInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.rolloutOperationInput"></a>

```go
func RolloutOperationInput() ComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation">ComputeGlobalVmExtensionPolicyRolloutOperation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalVmExtensionPolicyConfig <a name="ComputeGlobalVmExtensionPolicyConfig" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionPolicies: interface{},
	Name: *string,
	RolloutOperation: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation,
	DeletionPolicy: *string,
	Description: *string,
	InstanceSelectors: interface{},
	Priority: *f64,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies">ExtensionPolicies</a></code> | <code>interface{}</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation">ComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors">InstanceSelectors</a></code> | <code>interface{}</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.priority">Priority</a></code> | <code>*f64</code> | Used to resolve conflicts when multiple policies are active. Defaults to 0. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#project ComputeGlobalVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts">ComputeGlobalVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies"></a>

```go
ExtensionPolicies interface{}
```

- *Type:* interface{}

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#extension_policies ComputeGlobalVmExtensionPolicy#extension_policies}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long and match the regular expression '^[a-z](%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?$' to comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#name ComputeGlobalVmExtensionPolicy#name}

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation"></a>

```go
RolloutOperation ComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation">ComputeGlobalVmExtensionPolicyRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#rollout_operation ComputeGlobalVmExtensionPolicy#rollout_operation}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#deletion_policy ComputeGlobalVmExtensionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#description ComputeGlobalVmExtensionPolicy#description}

---

##### `InstanceSelectors`<sup>Optional</sup> <a name="InstanceSelectors" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors"></a>

```go
InstanceSelectors interface{}
```

- *Type:* interface{}

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#instance_selectors ComputeGlobalVmExtensionPolicy#instance_selectors}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Used to resolve conflicts when multiple policies are active. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#priority ComputeGlobalVmExtensionPolicy#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#project ComputeGlobalVmExtensionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeGlobalVmExtensionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts">ComputeGlobalVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#timeouts ComputeGlobalVmExtensionPolicy#timeouts}

---

### ComputeGlobalVmExtensionPolicyExtensionPolicies <a name="ComputeGlobalVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies {
	ExtensionName: *string,
	PinnedVersion: *string,
	StringConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName">ExtensionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#extension_name ComputeGlobalVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion">PinnedVersion</a></code> | <code>*string</code> | The version pinning for the extension. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig">StringConfig</a></code> | <code>*string</code> | String configuration payload. |

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```go
ExtensionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#extension_name ComputeGlobalVmExtensionPolicy#extension_name}.

---

##### `PinnedVersion`<sup>Optional</sup> <a name="PinnedVersion" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```go
PinnedVersion *string
```

- *Type:* *string

The version pinning for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#pinned_version ComputeGlobalVmExtensionPolicy#pinned_version}

---

##### `StringConfig`<sup>Optional</sup> <a name="StringConfig" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```go
StringConfig *string
```

- *Type:* *string

String configuration payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#string_config ComputeGlobalVmExtensionPolicy#string_config}

---

### ComputeGlobalVmExtensionPolicyInstanceSelectors <a name="ComputeGlobalVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyInstanceSelectors {
	LabelSelector: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `LabelSelector`<sup>Optional</sup> <a name="LabelSelector" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```go
LabelSelector ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#label_selector ComputeGlobalVmExtensionPolicy#label_selector}

---

### ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector <a name="ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector {
	InclusionLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">InclusionLabels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |

---

##### `InclusionLabels`<sup>Optional</sup> <a name="InclusionLabels" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```go
InclusionLabels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#inclusion_labels ComputeGlobalVmExtensionPolicy#inclusion_labels}

---

### ComputeGlobalVmExtensionPolicyRolloutOperation <a name="ComputeGlobalVmExtensionPolicyRolloutOperation" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyRolloutOperation {
	RolloutInput: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput"></a>

```go
RolloutInput ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#rollout_input ComputeGlobalVmExtensionPolicy#rollout_input}

---

### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput {
	ConflictBehavior: *string,
	Name: *string,
	PredefinedRolloutPlan: *string,
	RetryUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior">ConflictBehavior</a></code> | <code>*string</code> | Specifies the behavior of the rollout if a conflict is detected. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name">Name</a></code> | <code>*string</code> | The name of the rollout plan. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>*string</code> | Specifies the predefined rollout plan for the policy. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid">RetryUuid</a></code> | <code>*string</code> | The UUID that identifies a policy rollout retry attempt. |

---

##### `ConflictBehavior`<sup>Optional</sup> <a name="ConflictBehavior" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior"></a>

```go
ConflictBehavior *string
```

- *Type:* *string

Specifies the behavior of the rollout if a conflict is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#conflict_behavior ComputeGlobalVmExtensionPolicy#conflict_behavior}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#name ComputeGlobalVmExtensionPolicy#name}

---

##### `PredefinedRolloutPlan`<sup>Optional</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```go
PredefinedRolloutPlan *string
```

- *Type:* *string

Specifies the predefined rollout plan for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#predefined_rollout_plan ComputeGlobalVmExtensionPolicy#predefined_rollout_plan}

---

##### `RetryUuid`<sup>Optional</sup> <a name="RetryUuid" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid"></a>

```go
RetryUuid *string
```

- *Type:* *string

The UUID that identifies a policy rollout retry attempt.

It should only be set when retrying an existing rollout. Updating this field along with other policy fields (description, extension_policies, instance_selectors, priority) in the same plan will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#retry_uuid ComputeGlobalVmExtensionPolicy#retry_uuid}

---

### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus {

}
```


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts {

}
```


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus {

}
```


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout {

}
```


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus {

}
```


### ComputeGlobalVmExtensionPolicyTimeouts <a name="ComputeGlobalVmExtensionPolicyTimeouts" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

&computeglobalvmextensionpolicy.ComputeGlobalVmExtensionPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#create ComputeGlobalVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#delete ComputeGlobalVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#update ComputeGlobalVmExtensionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#create ComputeGlobalVmExtensionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#delete ComputeGlobalVmExtensionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_global_vm_extension_policy#update ComputeGlobalVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalVmExtensionPolicyExtensionPoliciesList <a name="ComputeGlobalVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyExtensionPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeGlobalVmExtensionPolicyExtensionPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.get"></a>

```go
func Get(index *f64) ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference <a name="ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">ResetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">ResetStringConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinnedVersion` <a name="ResetPinnedVersion" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```go
func ResetPinnedVersion()
```

##### `ResetStringConfig` <a name="ResetStringConfig" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```go
func ResetStringConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">ExtensionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">PinnedVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">StringConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">ExtensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">PinnedVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">StringConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtensionNameInput`<sup>Optional</sup> <a name="ExtensionNameInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```go
func ExtensionNameInput() *string
```

- *Type:* *string

---

##### `PinnedVersionInput`<sup>Optional</sup> <a name="PinnedVersionInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```go
func PinnedVersionInput() *string
```

- *Type:* *string

---

##### `StringConfigInput`<sup>Optional</sup> <a name="StringConfigInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```go
func StringConfigInput() *string
```

- *Type:* *string

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```go
func ExtensionName() *string
```

- *Type:* *string

---

##### `PinnedVersion`<sup>Required</sup> <a name="PinnedVersion" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```go
func PinnedVersion() *string
```

- *Type:* *string

---

##### `StringConfig`<sup>Required</sup> <a name="StringConfig" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```go
func StringConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">ResetInclusionLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInclusionLabels` <a name="ResetInclusionLabels" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```go
func ResetInclusionLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">InclusionLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">InclusionLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InclusionLabelsInput`<sup>Optional</sup> <a name="InclusionLabelsInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```go
func InclusionLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InclusionLabels`<sup>Required</sup> <a name="InclusionLabels" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```go
func InclusionLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### ComputeGlobalVmExtensionPolicyInstanceSelectorsList <a name="ComputeGlobalVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyInstanceSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeGlobalVmExtensionPolicyInstanceSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.get"></a>

```go
func Get(index *f64) ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference <a name="ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">PutLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">ResetLabelSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSelector` <a name="PutLabelSelector" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```go
func PutLabelSelector(value ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `ResetLabelSelector` <a name="ResetLabelSelector" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```go
func ResetLabelSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```go
func LabelSelector() ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```go
func LabelSelectorInput() ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference <a name="ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput">PutRolloutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutInput` <a name="PutRolloutInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput"></a>

```go
func PutRolloutInput(value ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus">RolloutStatus</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput">RolloutInputInput</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation">ComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput"></a>

```go
func RolloutInput() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a>

---

##### `RolloutStatus`<sup>Required</sup> <a name="RolloutStatus" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus"></a>

```go
func RolloutStatus() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a>

---

##### `RolloutInputInput`<sup>Optional</sup> <a name="RolloutInputInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput"></a>

```go
func RolloutInputInput() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperation">ComputeGlobalVmExtensionPolicyRolloutOperation</a>

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior">ResetConflictBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan">ResetPredefinedRolloutPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid">ResetRetryUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictBehavior` <a name="ResetConflictBehavior" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior"></a>

```go
func ResetConflictBehavior()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPredefinedRolloutPlan` <a name="ResetPredefinedRolloutPlan" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan"></a>

```go
func ResetPredefinedRolloutPlan()
```

##### `ResetRetryUuid` <a name="ResetRetryUuid" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid"></a>

```go
func ResetRetryUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput">ConflictBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">PredefinedRolloutPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput">RetryUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior">ConflictBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid">RetryUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConflictBehaviorInput`<sup>Optional</sup> <a name="ConflictBehaviorInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput"></a>

```go
func ConflictBehaviorInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PredefinedRolloutPlanInput`<sup>Optional</sup> <a name="PredefinedRolloutPlanInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```go
func PredefinedRolloutPlanInput() *string
```

- *Type:* *string

---

##### `RetryUuidInput`<sup>Optional</sup> <a name="RetryUuidInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput"></a>

```go
func RetryUuidInput() *string
```

- *Type:* *string

---

##### `ConflictBehavior`<sup>Required</sup> <a name="ConflictBehavior" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior"></a>

```go
func ConflictBehavior() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```go
func PredefinedRolloutPlan() *string
```

- *Type:* *string

---

##### `RetryUuid`<sup>Required</sup> <a name="RetryUuid" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid"></a>

```go
func RetryUuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get"></a>

```go
func Get(index *f64) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get"></a>

```go
func Get(index *f64) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a>

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus">LocationRolloutStatus</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout">Rollout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan">RolloutPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationRolloutStatus`<sup>Required</sup> <a name="LocationRolloutStatus" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus"></a>

```go
func LocationRolloutStatus() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout"></a>

```go
func Rollout() *string
```

- *Type:* *string

---

##### `RolloutPlan`<sup>Required</sup> <a name="RolloutPlan" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan"></a>

```go
func RolloutPlan() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a>

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get"></a>

```go
func Get(index *f64) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts">CurrentRollouts</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout">PreviousRollout</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentRollouts`<sup>Required</sup> <a name="CurrentRollouts" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts"></a>

```go
func CurrentRollouts() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a>

---

##### `PreviousRollout`<sup>Required</sup> <a name="PreviousRollout" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout"></a>

```go
func PreviousRollout() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a>

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get"></a>

```go
func Get(index *f64) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get"></a>

```go
func Get(index *f64) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a>

---


### ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference <a name="ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus">LocationRolloutStatus</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout">Rollout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan">RolloutPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationRolloutStatus`<sup>Required</sup> <a name="LocationRolloutStatus" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus"></a>

```go
func LocationRolloutStatus() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout"></a>

```go
func Rollout() *string
```

- *Type:* *string

---

##### `RolloutPlan`<sup>Required</sup> <a name="RolloutPlan" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan"></a>

```go
func RolloutPlan() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout
```

- *Type:* <a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">ComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a>

---


### ComputeGlobalVmExtensionPolicyTimeoutsOutputReference <a name="ComputeGlobalVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computeglobalvmextensionpolicy"

computeglobalvmextensionpolicy.NewComputeGlobalVmExtensionPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeGlobalVmExtensionPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeGlobalVmExtensionPolicy.ComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



