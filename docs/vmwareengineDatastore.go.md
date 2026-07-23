# `vmwareengineDatastore` Submodule <a name="`vmwareengineDatastore` Submodule" id="@cdktn/provider-google.vmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineDatastore <a name="VmwareengineDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.NewVmwareengineDatastore(scope Construct, id *string, config VmwareengineDatastoreConfig) VmwareengineDatastore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig">VmwareengineDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig">VmwareengineDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore">PutNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNfsDatastore` <a name="PutNfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore"></a>

```go
func PutNfsDatastore(value VmwareengineDatastoreNfsDatastore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts"></a>

```go
func PutTimeouts(value VmwareengineDatastoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.VmwareengineDatastore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.VmwareengineDatastore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.VmwareengineDatastore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.VmwareengineDatastore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VmwareengineDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters">Clusters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore">NfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput">NfsDatastoreInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters"></a>

```go
func Clusters() *[]*string
```

- *Type:* *[]*string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `NfsDatastore`<sup>Required</sup> <a name="NfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore"></a>

```go
func NfsDatastore() VmwareengineDatastoreNfsDatastoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts"></a>

```go
func Timeouts() VmwareengineDatastoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsDatastoreInput`<sup>Optional</sup> <a name="NfsDatastoreInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput"></a>

```go
func NfsDatastoreInput() VmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineDatastoreConfig <a name="VmwareengineDatastoreConfig" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

&vmwareenginedatastore.VmwareengineDatastoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	NfsDatastore: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vmwareengineDatastore.VmwareengineDatastoreTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name">Name</a></code> | <code>*string</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore">NfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#location VmwareengineDatastore#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#name VmwareengineDatastore#name}

---

##### `NfsDatastore`<sup>Required</sup> <a name="NfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore"></a>

```go
NfsDatastore VmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#nfs_datastore VmwareengineDatastore#nfs_datastore}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#deletion_policy VmwareengineDatastore#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#description VmwareengineDatastore#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts"></a>

```go
Timeouts VmwareengineDatastoreTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#timeouts VmwareengineDatastore#timeouts}

---

### VmwareengineDatastoreNfsDatastore <a name="VmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

&vmwareenginedatastore.VmwareengineDatastoreNfsDatastore {
	GoogleFileService: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService,
	ThirdPartyFileService: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService">GoogleFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | google_file_service block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService">ThirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | third_party_file_service block. |

---

##### `GoogleFileService`<sup>Optional</sup> <a name="GoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService"></a>

```go
GoogleFileService VmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#google_file_service VmwareengineDatastore#google_file_service}

---

##### `ThirdPartyFileService`<sup>Optional</sup> <a name="ThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService"></a>

```go
ThirdPartyFileService VmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#third_party_file_service VmwareengineDatastore#third_party_file_service}

---

### VmwareengineDatastoreNfsDatastoreGoogleFileService <a name="VmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

&vmwareenginedatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService {
	FilestoreInstance: *string,
	NetappVolume: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance">FilestoreInstance</a></code> | <code>*string</code> | Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume">NetappVolume</a></code> | <code>*string</code> | Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume. |

---

##### `FilestoreInstance`<sup>Optional</sup> <a name="FilestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance"></a>

```go
FilestoreInstance *string
```

- *Type:* *string

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#filestore_instance VmwareengineDatastore#filestore_instance}

---

##### `NetappVolume`<sup>Optional</sup> <a name="NetappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume"></a>

```go
NetappVolume *string
```

- *Type:* *string

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#netapp_volume VmwareengineDatastore#netapp_volume}

---

### VmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

&vmwareenginedatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService {
	FileShare: *string,
	Network: *string,
	Servers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare">FileShare</a></code> | <code>*string</code> | Required Mount Folder name. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network">Network</a></code> | <code>*string</code> | Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers">Servers</a></code> | <code>*[]*string</code> | Server IP addresses of the NFS file service. |

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare"></a>

```go
FileShare *string
```

- *Type:* *string

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#file_share VmwareengineDatastore#file_share}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#network VmwareengineDatastore#network}

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers"></a>

```go
Servers *[]*string
```

- *Type:* *[]*string

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#servers VmwareengineDatastore#servers}

---

### VmwareengineDatastoreTimeouts <a name="VmwareengineDatastoreTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

&vmwareenginedatastore.VmwareengineDatastoreTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.NewVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance">ResetFilestoreInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume">ResetNetappVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilestoreInstance` <a name="ResetFilestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance"></a>

```go
func ResetFilestoreInstance()
```

##### `ResetNetappVolume` <a name="ResetNetappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume"></a>

```go
func ResetNetappVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput">FilestoreInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput">NetappVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">FilestoreInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">NetappVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilestoreInstanceInput`<sup>Optional</sup> <a name="FilestoreInstanceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput"></a>

```go
func FilestoreInstanceInput() *string
```

- *Type:* *string

---

##### `NetappVolumeInput`<sup>Optional</sup> <a name="NetappVolumeInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput"></a>

```go
func NetappVolumeInput() *string
```

- *Type:* *string

---

##### `FilestoreInstance`<sup>Required</sup> <a name="FilestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```go
func FilestoreInstance() *string
```

- *Type:* *string

---

##### `NetappVolume`<sup>Required</sup> <a name="NetappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```go
func NetappVolume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### VmwareengineDatastoreNfsDatastoreOutputReference <a name="VmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.NewVmwareengineDatastoreNfsDatastoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareengineDatastoreNfsDatastoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService">PutGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService">PutThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService">ResetGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService">ResetThirdPartyFileService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoogleFileService` <a name="PutGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService"></a>

```go
func PutGoogleFileService(value VmwareengineDatastoreNfsDatastoreGoogleFileService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `PutThirdPartyFileService` <a name="PutThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService"></a>

```go
func PutThirdPartyFileService(value VmwareengineDatastoreNfsDatastoreThirdPartyFileService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `ResetGoogleFileService` <a name="ResetGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService"></a>

```go
func ResetGoogleFileService()
```

##### `ResetThirdPartyFileService` <a name="ResetThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService"></a>

```go
func ResetThirdPartyFileService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">GoogleFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">ThirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput">GoogleFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput">ThirdPartyFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoogleFileService`<sup>Required</sup> <a name="GoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```go
func GoogleFileService() VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a>

---

##### `ThirdPartyFileService`<sup>Required</sup> <a name="ThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```go
func ThirdPartyFileService() VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a>

---

##### `GoogleFileServiceInput`<sup>Optional</sup> <a name="GoogleFileServiceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput"></a>

```go
func GoogleFileServiceInput() VmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `ThirdPartyFileServiceInput`<sup>Optional</sup> <a name="ThirdPartyFileServiceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput"></a>

```go
func ThirdPartyFileServiceInput() VmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---


### VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.NewVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput">FileShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput">ServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">FileShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">Servers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileShareInput`<sup>Optional</sup> <a name="FileShareInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput"></a>

```go
func FileShareInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput"></a>

```go
func ServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```go
func FileShare() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```go
func Servers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---


### VmwareengineDatastoreTimeoutsOutputReference <a name="VmwareengineDatastoreTimeoutsOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vmwareenginedatastore"

vmwareenginedatastore.NewVmwareengineDatastoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareengineDatastoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



