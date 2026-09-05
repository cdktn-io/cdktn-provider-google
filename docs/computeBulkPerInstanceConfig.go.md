# `computeBulkPerInstanceConfig` Submodule <a name="`computeBulkPerInstanceConfig` Submodule" id="@cdktn/provider-google.computeBulkPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBulkPerInstanceConfig <a name="ComputeBulkPerInstanceConfig" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config google_compute_bulk_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.NewComputeBulkPerInstanceConfig(scope Construct, id *string, config ComputeBulkPerInstanceConfigConfig) ComputeBulkPerInstanceConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig">ComputeBulkPerInstanceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig">ComputeBulkPerInstanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances">PutInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstances` <a name="PutInstances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances"></a>

```go
func PutInstances(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts"></a>

```go
func PutTimeouts(value ComputeBulkPerInstanceConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetInstances"></a>

```go
func ResetInstances()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.ComputeBulkPerInstanceConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.ComputeBulkPerInstanceConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.ComputeBulkPerInstanceConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.ComputeBulkPerInstanceConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeBulkPerInstanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeBulkPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeBulkPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instances">Instances</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList">ComputeBulkPerInstanceConfigInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference">ComputeBulkPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManagerInput">InstanceGroupManagerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instancesInput">InstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instances"></a>

```go
func Instances() ComputeBulkPerInstanceConfigInstancesList
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList">ComputeBulkPerInstanceConfigInstancesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeouts"></a>

```go
func Timeouts() ComputeBulkPerInstanceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference">ComputeBulkPerInstanceConfigTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceGroupManagerInput`<sup>Optional</sup> <a name="InstanceGroupManagerInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManagerInput"></a>

```go
func InstanceGroupManagerInput() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instancesInput"></a>

```go
func InstancesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManager"></a>

```go
func InstanceGroupManager() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBulkPerInstanceConfigConfig <a name="ComputeBulkPerInstanceConfigConfig" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

&computebulkperinstanceconfig.ComputeBulkPerInstanceConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceGroupManager: *string,
	DeletionPolicy: *string,
	Id: *string,
	Instances: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>*string</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instances">Instances</a></code> | <code>interface{}</code> | instances block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the containing instance group manager is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instanceGroupManager"></a>

```go
InstanceGroupManager *string
```

- *Type:* *string

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#instance_group_manager ComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#deletion_policy ComputeBulkPerInstanceConfig#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instances"></a>

```go
Instances interface{}
```

- *Type:* interface{}

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#instances ComputeBulkPerInstanceConfig#instances}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.timeouts"></a>

```go
Timeouts ComputeBulkPerInstanceConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#timeouts ComputeBulkPerInstanceConfig#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#zone ComputeBulkPerInstanceConfig#zone}

---

### ComputeBulkPerInstanceConfigInstances <a name="ComputeBulkPerInstanceConfigInstances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

&computebulkperinstanceconfig.ComputeBulkPerInstanceConfigInstances {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.property.name">Name</a></code> | <code>*string</code> | The name for this per-instance config and its corresponding instance. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#name ComputeBulkPerInstanceConfig#name}

---

### ComputeBulkPerInstanceConfigTimeouts <a name="ComputeBulkPerInstanceConfigTimeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

&computebulkperinstanceconfig.ComputeBulkPerInstanceConfigTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#create ComputeBulkPerInstanceConfig#create}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#delete ComputeBulkPerInstanceConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#create ComputeBulkPerInstanceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#delete ComputeBulkPerInstanceConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBulkPerInstanceConfigInstancesList <a name="ComputeBulkPerInstanceConfigInstancesList" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.NewComputeBulkPerInstanceConfigInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeBulkPerInstanceConfigInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get"></a>

```go
func Get(index *f64) ComputeBulkPerInstanceConfigInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBulkPerInstanceConfigInstancesOutputReference <a name="ComputeBulkPerInstanceConfigInstancesOutputReference" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.NewComputeBulkPerInstanceConfigInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeBulkPerInstanceConfigInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeBulkPerInstanceConfigTimeoutsOutputReference <a name="ComputeBulkPerInstanceConfigTimeoutsOutputReference" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computebulkperinstanceconfig"

computebulkperinstanceconfig.NewComputeBulkPerInstanceConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeBulkPerInstanceConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



