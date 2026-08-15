# `cloudRunV2WorkerPoolIamBinding` Submodule <a name="`cloudRunV2WorkerPoolIamBinding` Submodule" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2WorkerPoolIamBinding <a name="CloudRunV2WorkerPoolIamBinding" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding google_cloud_run_v2_worker_pool_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

cloudrunv2workerpooliambinding.NewCloudRunV2WorkerPoolIamBinding(scope Construct, id *string, config CloudRunV2WorkerPoolIamBindingConfig) CloudRunV2WorkerPoolIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig">CloudRunV2WorkerPoolIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig">CloudRunV2WorkerPoolIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition"></a>

```go
func PutCondition(value CloudRunV2WorkerPoolIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudRunV2WorkerPoolIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

cloudrunv2workerpooliambinding.CloudRunV2WorkerPoolIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

cloudrunv2workerpooliambinding.CloudRunV2WorkerPoolIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

cloudrunv2workerpooliambinding.CloudRunV2WorkerPoolIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

cloudrunv2workerpooliambinding.CloudRunV2WorkerPoolIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudRunV2WorkerPoolIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudRunV2WorkerPoolIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudRunV2WorkerPoolIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudRunV2WorkerPoolIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference">CloudRunV2WorkerPoolIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.condition"></a>

```go
func Condition() CloudRunV2WorkerPoolIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference">CloudRunV2WorkerPoolIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.conditionInput"></a>

```go
func ConditionInput() CloudRunV2WorkerPoolIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2WorkerPoolIamBindingCondition <a name="CloudRunV2WorkerPoolIamBindingCondition" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

&cloudrunv2workerpooliambinding.CloudRunV2WorkerPoolIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#expression CloudRunV2WorkerPoolIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#title CloudRunV2WorkerPoolIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#description CloudRunV2WorkerPoolIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#expression CloudRunV2WorkerPoolIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#title CloudRunV2WorkerPoolIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#description CloudRunV2WorkerPoolIamBinding#description}.

---

### CloudRunV2WorkerPoolIamBindingConfig <a name="CloudRunV2WorkerPoolIamBindingConfig" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

&cloudrunv2workerpooliambinding.CloudRunV2WorkerPoolIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Name: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v20.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.condition"></a>

```go
Condition CloudRunV2WorkerPoolIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#condition CloudRunV2WorkerPoolIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2WorkerPoolIamBindingConditionOutputReference <a name="CloudRunV2WorkerPoolIamBindingConditionOutputReference" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/cloudrunv2workerpooliambinding"

cloudrunv2workerpooliambinding.NewCloudRunV2WorkerPoolIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2WorkerPoolIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2WorkerPoolIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---



