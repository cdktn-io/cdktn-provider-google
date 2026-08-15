# `chronicleSoarNetwork` Submodule <a name="`chronicleSoarNetwork` Submodule" id="@cdktn/provider-google.chronicleSoarNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleSoarNetwork <a name="ChronicleSoarNetwork" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network google_chronicle_soar_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

chroniclesoarnetwork.NewChronicleSoarNetwork(scope Construct, id *string, config ChronicleSoarNetworkConfig) ChronicleSoarNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig">ChronicleSoarNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig">ChronicleSoarNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleSoarNetworkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts">ChronicleSoarNetworkTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleSoarNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

chroniclesoarnetwork.ChronicleSoarNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

chroniclesoarnetwork.ChronicleSoarNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

chroniclesoarnetwork.ChronicleSoarNetwork_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

chroniclesoarnetwork.ChronicleSoarNetwork_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChronicleSoarNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleSoarNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleSoarNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleSoarNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.soarNetworkId">SoarNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference">ChronicleSoarNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.environmentsJsonInput">EnvironmentsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.environmentsJson">EnvironmentsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SoarNetworkId`<sup>Required</sup> <a name="SoarNetworkId" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.soarNetworkId"></a>

```go
func SoarNetworkId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.timeouts"></a>

```go
func Timeouts() ChronicleSoarNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference">ChronicleSoarNetworkTimeoutsOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnvironmentsJsonInput`<sup>Optional</sup> <a name="EnvironmentsJsonInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.environmentsJsonInput"></a>

```go
func EnvironmentsJsonInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnvironmentsJson`<sup>Required</sup> <a name="EnvironmentsJson" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.environmentsJson"></a>

```go
func EnvironmentsJson() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleSoarNetworkConfig <a name="ChronicleSoarNetworkConfig" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

&chroniclesoarnetwork.ChronicleSoarNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Address: *string,
	DisplayName: *string,
	EnvironmentsJson: *string,
	Instance: *string,
	Location: *string,
	DeletionPolicy: *string,
	Id: *string,
	Priority: *f64,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.address">Address</a></code> | <code>*string</code> | Subnet in CIDR format. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | SoarNetwork name, limited to 4096 characters. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.environmentsJson">EnvironmentsJson</a></code> | <code>*string</code> | SoarNetwork associated logical environments. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.instance">Instance</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#id ChronicleSoarNetwork#id}. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.priority">Priority</a></code> | <code>*f64</code> | SoarNetwork priority. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#project ChronicleSoarNetwork#project}. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts">ChronicleSoarNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

Subnet in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#address ChronicleSoarNetwork#address}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

SoarNetwork name, limited to 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#display_name ChronicleSoarNetwork#display_name}

---

##### `EnvironmentsJson`<sup>Required</sup> <a name="EnvironmentsJson" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.environmentsJson"></a>

```go
EnvironmentsJson *string
```

- *Type:* *string

SoarNetwork associated logical environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#environments_json ChronicleSoarNetwork#environments_json}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#instance ChronicleSoarNetwork#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#location ChronicleSoarNetwork#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#deletion_policy ChronicleSoarNetwork#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#id ChronicleSoarNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

SoarNetwork priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#priority ChronicleSoarNetwork#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#project ChronicleSoarNetwork#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkConfig.property.timeouts"></a>

```go
Timeouts ChronicleSoarNetworkTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts">ChronicleSoarNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#timeouts ChronicleSoarNetwork#timeouts}

---

### ChronicleSoarNetworkTimeouts <a name="ChronicleSoarNetworkTimeouts" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

&chroniclesoarnetwork.ChronicleSoarNetworkTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#create ChronicleSoarNetwork#create}. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#delete ChronicleSoarNetwork#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#update ChronicleSoarNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#create ChronicleSoarNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#delete ChronicleSoarNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_soar_network#update ChronicleSoarNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleSoarNetworkTimeoutsOutputReference <a name="ChronicleSoarNetworkTimeoutsOutputReference" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclesoarnetwork"

chroniclesoarnetwork.NewChronicleSoarNetworkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleSoarNetworkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleSoarNetwork.ChronicleSoarNetworkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



