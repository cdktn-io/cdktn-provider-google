# `computeNetworkEndpointGroup` Submodule <a name="`computeNetworkEndpointGroup` Submodule" id="@cdktn/provider-google.computeNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEndpointGroup <a name="ComputeNetworkEndpointGroup" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group google_compute_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

computenetworkendpointgroup.NewComputeNetworkEndpointGroup(scope Construct, id *string, config ComputeNetworkEndpointGroupConfig) ComputeNetworkEndpointGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig">ComputeNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig">ComputeNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDefaultPort">ResetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetNetworkEndpointType">ResetNetworkEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts"></a>

```go
func PutTimeouts(value ComputeNetworkEndpointGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

---

##### `ResetDefaultPort` <a name="ResetDefaultPort" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDefaultPort"></a>

```go
func ResetDefaultPort()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkEndpointType` <a name="ResetNetworkEndpointType" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetNetworkEndpointType"></a>

```go
func ResetNetworkEndpointType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeNetworkEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

computenetworkendpointgroup.ComputeNetworkEndpointGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

computenetworkendpointgroup.ComputeNetworkEndpointGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

computenetworkendpointgroup.ComputeNetworkEndpointGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

computenetworkendpointgroup.ComputeNetworkEndpointGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeNetworkEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.generatedId">GeneratedId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference">ComputeNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPortInput">DefaultPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointTypeInput">NetworkEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPort">DefaultPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.generatedId"></a>

```go
func GeneratedId() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeouts"></a>

```go
func Timeouts() ComputeNetworkEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference">ComputeNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `DefaultPortInput`<sup>Optional</sup> <a name="DefaultPortInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPortInput"></a>

```go
func DefaultPortInput() *f64
```

- *Type:* *f64

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkEndpointTypeInput`<sup>Optional</sup> <a name="NetworkEndpointTypeInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```go
func NetworkEndpointTypeInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DefaultPort`<sup>Required</sup> <a name="DefaultPort" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPort"></a>

```go
func DefaultPort() *f64
```

- *Type:* *f64

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointType"></a>

```go
func NetworkEndpointType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEndpointGroupConfig <a name="ComputeNetworkEndpointGroupConfig" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

&computenetworkendpointgroup.ComputeNetworkEndpointGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	DefaultPort: *f64,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	NetworkEndpointType: *string,
	Project: *string,
	Subnetwork: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.network">Network</a></code> | <code>*string</code> | The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.defaultPort">DefaultPort</a></code> | <code>*f64</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Optional subnetwork to which all network endpoints in the NEG belong. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the network endpoint group is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#name ComputeNetworkEndpointGroup#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#network ComputeNetworkEndpointGroup#network}

---

##### `DefaultPort`<sup>Optional</sup> <a name="DefaultPort" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.defaultPort"></a>

```go
DefaultPort *f64
```

- *Type:* *f64

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#default_port ComputeNetworkEndpointGroup#default_port}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#deletion_policy ComputeNetworkEndpointGroup#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#description ComputeNetworkEndpointGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkEndpointType`<sup>Optional</sup> <a name="NetworkEndpointType" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```go
NetworkEndpointType *string
```

- *Type:* *string

Type of network endpoints in this network endpoint group.

NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.

Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP", "GCE_VM_IP_PORT", "NON_GCP_PRIVATE_IP_PORT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "SERVERLESS", "PRIVATE_SERVICE_CONNECT", "GCE_VM_IP_DEDICATED_BACKEND"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#network_endpoint_type ComputeNetworkEndpointGroup#network_endpoint_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}.

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Optional subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#subnetwork ComputeNetworkEndpointGroup#subnetwork}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.timeouts"></a>

```go
Timeouts ComputeNetworkEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#timeouts ComputeNetworkEndpointGroup#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#zone ComputeNetworkEndpointGroup#zone}

---

### ComputeNetworkEndpointGroupTimeouts <a name="ComputeNetworkEndpointGroupTimeouts" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

&computenetworkendpointgroup.ComputeNetworkEndpointGroupTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#create ComputeNetworkEndpointGroup#create}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#delete ComputeNetworkEndpointGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#create ComputeNetworkEndpointGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_network_endpoint_group#delete ComputeNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeNetworkEndpointGroupTimeoutsOutputReference" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computenetworkendpointgroup"

computenetworkendpointgroup.NewComputeNetworkEndpointGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNetworkEndpointGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



