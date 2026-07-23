# `computeZoneVmExtensionPolicy` Submodule <a name="`computeZoneVmExtensionPolicy` Submodule" id="@cdktn/provider-google.computeZoneVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeZoneVmExtensionPolicy <a name="ComputeZoneVmExtensionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.NewComputeZoneVmExtensionPolicy(scope Construct, id *string, config ComputeZoneVmExtensionPolicyConfig) ComputeZoneVmExtensionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig">ComputeZoneVmExtensionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig">ComputeZoneVmExtensionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies">PutExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors">PutInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetInstanceSelectors">ResetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionPolicies` <a name="PutExtensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies"></a>

```go
func PutExtensionPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstanceSelectors` <a name="PutInstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors"></a>

```go
func PutInstanceSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeZoneVmExtensionPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInstanceSelectors` <a name="ResetInstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetInstanceSelectors"></a>

```go
func ResetInstanceSelectors()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.ComputeZoneVmExtensionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.ComputeZoneVmExtensionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.ComputeZoneVmExtensionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.ComputeZoneVmExtensionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeZoneVmExtensionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeZoneVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeZoneVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPolicies">ExtensionPolicies</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList">ComputeZoneVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectors">InstanceSelectors</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList">ComputeZoneVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.managedByGlobal">ManagedByGlobal</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference">ComputeZoneVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPoliciesInput">ExtensionPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectorsInput">InstanceSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPolicies"></a>

```go
func ExtensionPolicies() ComputeZoneVmExtensionPolicyExtensionPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList">ComputeZoneVmExtensionPolicyExtensionPoliciesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceSelectors`<sup>Required</sup> <a name="InstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectors"></a>

```go
func InstanceSelectors() ComputeZoneVmExtensionPolicyInstanceSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList">ComputeZoneVmExtensionPolicyInstanceSelectorsList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `ManagedByGlobal`<sup>Required</sup> <a name="ManagedByGlobal" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.managedByGlobal"></a>

```go
func ManagedByGlobal() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeouts"></a>

```go
func Timeouts() ComputeZoneVmExtensionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference">ComputeZoneVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionPoliciesInput`<sup>Optional</sup> <a name="ExtensionPoliciesInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPoliciesInput"></a>

```go
func ExtensionPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceSelectorsInput`<sup>Optional</sup> <a name="InstanceSelectorsInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectorsInput"></a>

```go
func InstanceSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeZoneVmExtensionPolicyConfig <a name="ComputeZoneVmExtensionPolicyConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

&computezonevmextensionpolicy.ComputeZoneVmExtensionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionPolicies: interface{},
	Name: *string,
	Zone: *string,
	DeletionPolicy: *string,
	Description: *string,
	InstanceSelectors: interface{},
	Priority: *f64,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.extensionPolicies">ExtensionPolicies</a></code> | <code>interface{}</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.zone">Zone</a></code> | <code>*string</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.instanceSelectors">InstanceSelectors</a></code> | <code>interface{}</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.priority">Priority</a></code> | <code>*f64</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.extensionPolicies"></a>

```go
ExtensionPolicies interface{}
```

- *Type:* interface{}

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#extension_policies ComputeZoneVmExtensionPolicy#extension_policies}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#name ComputeZoneVmExtensionPolicy#name}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#zone ComputeZoneVmExtensionPolicy#zone}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#deletion_policy ComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#description ComputeZoneVmExtensionPolicy#description}

---

##### `InstanceSelectors`<sup>Optional</sup> <a name="InstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.instanceSelectors"></a>

```go
InstanceSelectors interface{}
```

- *Type:* interface{}

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#instance_selectors ComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#priority ComputeZoneVmExtensionPolicy#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeZoneVmExtensionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#timeouts ComputeZoneVmExtensionPolicy#timeouts}

---

### ComputeZoneVmExtensionPolicyExtensionPolicies <a name="ComputeZoneVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

&computezonevmextensionpolicy.ComputeZoneVmExtensionPolicyExtensionPolicies {
	ExtensionName: *string,
	PinnedVersion: *string,
	StringConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName">ExtensionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#extension_name ComputeZoneVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion">PinnedVersion</a></code> | <code>*string</code> | The specific version of the extension to install. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig">StringConfig</a></code> | <code>*string</code> | String-based configuration data for the extension. |

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```go
ExtensionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#extension_name ComputeZoneVmExtensionPolicy#extension_name}.

---

##### `PinnedVersion`<sup>Optional</sup> <a name="PinnedVersion" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```go
PinnedVersion *string
```

- *Type:* *string

The specific version of the extension to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#pinned_version ComputeZoneVmExtensionPolicy#pinned_version}

---

##### `StringConfig`<sup>Optional</sup> <a name="StringConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```go
StringConfig *string
```

- *Type:* *string

String-based configuration data for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#string_config ComputeZoneVmExtensionPolicy#string_config}

---

### ComputeZoneVmExtensionPolicyInstanceSelectors <a name="ComputeZoneVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

&computezonevmextensionpolicy.ComputeZoneVmExtensionPolicyInstanceSelectors {
	LabelSelector: github.com/cdktn-io/cdktn-provider-google-go/google/v19.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `LabelSelector`<sup>Optional</sup> <a name="LabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```go
LabelSelector ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#label_selector ComputeZoneVmExtensionPolicy#label_selector}

---

### ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

&computezonevmextensionpolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector {
	InclusionLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">InclusionLabels</a></code> | <code>*map[string]*string</code> | A map of key-value pairs representing VM labels. |

---

##### `InclusionLabels`<sup>Optional</sup> <a name="InclusionLabels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```go
InclusionLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#inclusion_labels ComputeZoneVmExtensionPolicy#inclusion_labels}

---

### ComputeZoneVmExtensionPolicyTimeouts <a name="ComputeZoneVmExtensionPolicyTimeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

&computezonevmextensionpolicy.ComputeZoneVmExtensionPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeZoneVmExtensionPolicyExtensionPoliciesList <a name="ComputeZoneVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.NewComputeZoneVmExtensionPolicyExtensionPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeZoneVmExtensionPolicyExtensionPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get"></a>

```go
func Get(index *f64) ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference <a name="ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.NewComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">ResetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">ResetStringConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinnedVersion` <a name="ResetPinnedVersion" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```go
func ResetPinnedVersion()
```

##### `ResetStringConfig` <a name="ResetStringConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```go
func ResetStringConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">ExtensionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">PinnedVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">StringConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">ExtensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">PinnedVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">StringConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtensionNameInput`<sup>Optional</sup> <a name="ExtensionNameInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```go
func ExtensionNameInput() *string
```

- *Type:* *string

---

##### `PinnedVersionInput`<sup>Optional</sup> <a name="PinnedVersionInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```go
func PinnedVersionInput() *string
```

- *Type:* *string

---

##### `StringConfigInput`<sup>Optional</sup> <a name="StringConfigInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```go
func StringConfigInput() *string
```

- *Type:* *string

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```go
func ExtensionName() *string
```

- *Type:* *string

---

##### `PinnedVersion`<sup>Required</sup> <a name="PinnedVersion" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```go
func PinnedVersion() *string
```

- *Type:* *string

---

##### `StringConfig`<sup>Required</sup> <a name="StringConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```go
func StringConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.NewComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">ResetInclusionLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInclusionLabels` <a name="ResetInclusionLabels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```go
func ResetInclusionLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">InclusionLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">InclusionLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InclusionLabelsInput`<sup>Optional</sup> <a name="InclusionLabelsInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```go
func InclusionLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InclusionLabels`<sup>Required</sup> <a name="InclusionLabels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```go
func InclusionLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsList <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.NewComputeZoneVmExtensionPolicyInstanceSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeZoneVmExtensionPolicyInstanceSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get"></a>

```go
func Get(index *f64) ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.NewComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">PutLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">ResetLabelSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSelector` <a name="PutLabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```go
func PutLabelSelector(value ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `ResetLabelSelector` <a name="ResetLabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```go
func ResetLabelSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```go
func LabelSelector() ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```go
func LabelSelectorInput() ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeZoneVmExtensionPolicyTimeoutsOutputReference <a name="ComputeZoneVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/computezonevmextensionpolicy"

computezonevmextensionpolicy.NewComputeZoneVmExtensionPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeZoneVmExtensionPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



