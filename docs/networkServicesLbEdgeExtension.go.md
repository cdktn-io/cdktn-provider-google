# `networkServicesLbEdgeExtension` Submodule <a name="`networkServicesLbEdgeExtension` Submodule" id="@cdktn/provider-google.networkServicesLbEdgeExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesLbEdgeExtension <a name="NetworkServicesLbEdgeExtension" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension google_network_services_lb_edge_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NewNetworkServicesLbEdgeExtension(scope Construct, id *string, config NetworkServicesLbEdgeExtensionConfig) NetworkServicesLbEdgeExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig">NetworkServicesLbEdgeExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig">NetworkServicesLbEdgeExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putExtensionChains">PutExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionChains` <a name="PutExtensionChains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putExtensionChains"></a>

```go
func PutExtensionChains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putExtensionChains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesLbEdgeExtensionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesLbEdgeExtension resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NetworkServicesLbEdgeExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NetworkServicesLbEdgeExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NetworkServicesLbEdgeExtension_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NetworkServicesLbEdgeExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkServicesLbEdgeExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesLbEdgeExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesLbEdgeExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesLbEdgeExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChains">ExtensionChains</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList">NetworkServicesLbEdgeExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference">NetworkServicesLbEdgeExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChainsInput">ExtensionChainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRulesInput">ForwardingRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRules">ForwardingRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChains"></a>

```go
func ExtensionChains() NetworkServicesLbEdgeExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList">NetworkServicesLbEdgeExtensionExtensionChainsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeouts"></a>

```go
func Timeouts() NetworkServicesLbEdgeExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference">NetworkServicesLbEdgeExtensionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionChainsInput`<sup>Optional</sup> <a name="ExtensionChainsInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.extensionChainsInput"></a>

```go
func ExtensionChainsInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardingRulesInput`<sup>Optional</sup> <a name="ForwardingRulesInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRulesInput"></a>

```go
func ForwardingRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.forwardingRules"></a>

```go
func ForwardingRules() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesLbEdgeExtensionConfig <a name="NetworkServicesLbEdgeExtensionConfig" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

&networkserviceslbedgeextension.NetworkServicesLbEdgeExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionChains: interface{},
	ForwardingRules: *[]*string,
	LoadBalancingScheme: *string,
	Location: *string,
	Name: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.extensionChains">ExtensionChains</a></code> | <code>interface{}</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forwardingRules">ForwardingRules</a></code> | <code>*[]*string</code> | A list of references to the forwarding rules to which this service extension is attached. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"]. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.location">Location</a></code> | <code>*string</code> | The location of the edge extension. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#id NetworkServicesLbEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the LbEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#project NetworkServicesLbEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.extensionChains"></a>

```go
ExtensionChains interface{}
```

- *Type:* interface{}

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#extension_chains NetworkServicesLbEdgeExtension#extension_chains}

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.forwardingRules"></a>

```go
ForwardingRules *[]*string
```

- *Type:* *[]*string

A list of references to the forwarding rules to which this service extension is attached.

At least one forwarding rule is required. Only one LbEdgeExtension resource can be associated with a forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#forwarding_rules NetworkServicesLbEdgeExtension#forwarding_rules}

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#load_balancing_scheme NetworkServicesLbEdgeExtension#load_balancing_scheme}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#location NetworkServicesLbEdgeExtension#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#deletion_policy NetworkServicesLbEdgeExtension#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#description NetworkServicesLbEdgeExtension#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#id NetworkServicesLbEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the LbEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#labels NetworkServicesLbEdgeExtension#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#project NetworkServicesLbEdgeExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesLbEdgeExtensionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts">NetworkServicesLbEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#timeouts NetworkServicesLbEdgeExtension#timeouts}

---

### NetworkServicesLbEdgeExtensionExtensionChains <a name="NetworkServicesLbEdgeExtensionExtensionChains" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

&networkserviceslbedgeextension.NetworkServicesLbEdgeExtensionExtensionChains {
	Extensions: interface{},
	MatchCondition: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.extensions">Extensions</a></code> | <code>interface{}</code> | extensions block. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.name">Name</a></code> | <code>*string</code> | The name for this extension chain. |

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.extensions"></a>

```go
Extensions interface{}
```

- *Type:* interface{}

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#extensions NetworkServicesLbEdgeExtension#extensions}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.matchCondition"></a>

```go
MatchCondition NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#match_condition NetworkServicesLbEdgeExtension#match_condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChains.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}

---

### NetworkServicesLbEdgeExtensionExtensionChainsExtensions <a name="NetworkServicesLbEdgeExtensionExtensionChainsExtensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

&networkserviceslbedgeextension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions {
	Name: *string,
	Service: *string,
	FailOpen: interface{},
	ForwardAttributes: *[]*string,
	ForwardHeaders: *[]*string,
	SupportedEvents: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.name">Name</a></code> | <code>*string</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.service">Service</a></code> | <code>*string</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardAttributes">ForwardAttributes</a></code> | <code>*[]*string</code> | List of the Envoy attributes to forward to the extension server. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.supportedEvents">SupportedEvents</a></code> | <code>*[]*string</code> | A set of events during request or response processing for which this extension is called. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#name NetworkServicesLbEdgeExtension#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.service"></a>

```go
Service *string
```

- *Type:* *string

The reference to the service that runs the extension.

* To configure a callout extension, service must be a fully-qualified reference to a backend service.
* To configure a plugin extension, service must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#service NetworkServicesLbEdgeExtension#service}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#fail_open NetworkServicesLbEdgeExtension#fail_open}

---

##### `ForwardAttributes`<sup>Optional</sup> <a name="ForwardAttributes" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardAttributes"></a>

```go
ForwardAttributes *[]*string
```

- *Type:* *[]*string

List of the Envoy attributes to forward to the extension server.

The attributes
provided here are included as part of the 'ProcessingRequest.attributes' field
(of type 'map'), where the keys are the attribute names. Refer to the
[documentation](https://docs.cloud.google.com/service-extensions/docs/attributes)
for the names of attributes that can be forwarded. If omitted, no attributes
are sent. Each element is a string indicating the attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#forward_attributes NetworkServicesLbEdgeExtension#forward_attributes}

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```go
ForwardHeaders *[]*string
```

- *Type:* *[]*string

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#forward_headers NetworkServicesLbEdgeExtension#forward_headers}

---

##### `SupportedEvents`<sup>Optional</sup> <a name="SupportedEvents" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```go
SupportedEvents *[]*string
```

- *Type:* *[]*string

A set of events during request or response processing for which this extension is called.

This field is required for the LbEdgeExtension resource and only supports the value 'REQUEST_HEADERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#supported_events NetworkServicesLbEdgeExtension#supported_events}

---

### NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition <a name="NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

&networkserviceslbedgeextension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition {
	CelExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.property.celExpression">CelExpression</a></code> | <code>*string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```go
CelExpression *string
```

- *Type:* *string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#cel_expression NetworkServicesLbEdgeExtension#cel_expression}

---

### NetworkServicesLbEdgeExtensionTimeouts <a name="NetworkServicesLbEdgeExtensionTimeouts" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

&networkserviceslbedgeextension.NetworkServicesLbEdgeExtensionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#create NetworkServicesLbEdgeExtension#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#delete NetworkServicesLbEdgeExtension#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#update NetworkServicesLbEdgeExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#create NetworkServicesLbEdgeExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#delete NetworkServicesLbEdgeExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_services_lb_edge_extension#update NetworkServicesLbEdgeExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList <a name="NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NewNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get"></a>

```go
func Get(index *f64) NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference <a name="NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NewNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes">ResetForwardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">ResetSupportedEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetForwardAttributes` <a name="ResetForwardAttributes" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes"></a>

```go
func ResetForwardAttributes()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```go
func ResetForwardHeaders()
```

##### `ResetSupportedEvents` <a name="ResetSupportedEvents" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```go
func ResetSupportedEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput">ForwardAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">SupportedEventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes">ForwardAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardAttributesInput`<sup>Optional</sup> <a name="ForwardAttributesInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput"></a>

```go
func ForwardAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```go
func ForwardHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SupportedEventsInput`<sup>Optional</sup> <a name="SupportedEventsInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```go
func SupportedEventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `ForwardAttributes`<sup>Required</sup> <a name="ForwardAttributes" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes"></a>

```go
func ForwardAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```go
func ForwardHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```go
func SupportedEvents() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesLbEdgeExtensionExtensionChainsList <a name="NetworkServicesLbEdgeExtensionExtensionChainsList" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NewNetworkServicesLbEdgeExtensionExtensionChainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesLbEdgeExtensionExtensionChainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.get"></a>

```go
func Get(index *f64) NetworkServicesLbEdgeExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference <a name="NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NewNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">CelExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```go
func CelExpressionInput() *string
```

- *Type:* *string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```go
func CelExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---


### NetworkServicesLbEdgeExtensionExtensionChainsOutputReference <a name="NetworkServicesLbEdgeExtensionExtensionChainsOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NewNetworkServicesLbEdgeExtensionExtensionChainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesLbEdgeExtensionExtensionChainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensions` <a name="PutExtensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions"></a>

```go
func PutExtensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```go
func PutMatchCondition(value NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensions">Extensions</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList">NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensions"></a>

```go
func Extensions() NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList">NetworkServicesLbEdgeExtensionExtensionChainsExtensionsList</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```go
func MatchCondition() NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```go
func ExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```go
func MatchConditionInput() NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">NetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesLbEdgeExtensionTimeoutsOutputReference <a name="NetworkServicesLbEdgeExtensionTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networkserviceslbedgeextension"

networkserviceslbedgeextension.NewNetworkServicesLbEdgeExtensionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesLbEdgeExtensionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkServicesLbEdgeExtension.NetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



