# `firestoreIndex` Submodule <a name="`firestoreIndex` Submodule" id="@cdktn/provider-google.firestoreIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreIndex <a name="FirestoreIndex" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index google_firestore_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndex(scope Construct, id *string, config FirestoreIndexConfig) FirestoreIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig">FirestoreIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig">FirestoreIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetApiScope">ResetApiScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDensity">ResetDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetMultikey">ResetMultikey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetQueryScope">ResetQueryScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetSkipWait">ResetSkipWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetUnique">ResetUnique</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFields` <a name="PutFields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putTimeouts"></a>

```go
func PutTimeouts(value FirestoreIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

---

##### `ResetApiScope` <a name="ResetApiScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetApiScope"></a>

```go
func ResetApiScope()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDensity` <a name="ResetDensity" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDensity"></a>

```go
func ResetDensity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetMultikey` <a name="ResetMultikey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetMultikey"></a>

```go
func ResetMultikey()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQueryScope` <a name="ResetQueryScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetQueryScope"></a>

```go
func ResetQueryScope()
```

##### `ResetSkipWait` <a name="ResetSkipWait" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetSkipWait"></a>

```go
func ResetSkipWait()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetUnique"></a>

```go
func ResetUnique()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FirestoreIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.FirestoreIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.FirestoreIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.FirestoreIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.FirestoreIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FirestoreIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirestoreIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirestoreIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FirestoreIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList">FirestoreIndexFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference">FirestoreIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScopeInput">ApiScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collectionInput">CollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.densityInput">DensityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikeyInput">MultikeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScopeInput">QueryScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWaitInput">SkipWaitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.uniqueInput">UniqueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScope">ApiScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collection">Collection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.density">Density</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikey">Multikey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScope">QueryScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWait">SkipWait</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.unique">Unique</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fields"></a>

```go
func Fields() FirestoreIndexFieldsList
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList">FirestoreIndexFieldsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeouts"></a>

```go
func Timeouts() FirestoreIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference">FirestoreIndexTimeoutsOutputReference</a>

---

##### `ApiScopeInput`<sup>Optional</sup> <a name="ApiScopeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScopeInput"></a>

```go
func ApiScopeInput() *string
```

- *Type:* *string

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collectionInput"></a>

```go
func CollectionInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DensityInput`<sup>Optional</sup> <a name="DensityInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.densityInput"></a>

```go
func DensityInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MultikeyInput`<sup>Optional</sup> <a name="MultikeyInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikeyInput"></a>

```go
func MultikeyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QueryScopeInput`<sup>Optional</sup> <a name="QueryScopeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScopeInput"></a>

```go
func QueryScopeInput() *string
```

- *Type:* *string

---

##### `SkipWaitInput`<sup>Optional</sup> <a name="SkipWaitInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWaitInput"></a>

```go
func SkipWaitInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.uniqueInput"></a>

```go
func UniqueInput() interface{}
```

- *Type:* interface{}

---

##### `ApiScope`<sup>Required</sup> <a name="ApiScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScope"></a>

```go
func ApiScope() *string
```

- *Type:* *string

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collection"></a>

```go
func Collection() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Density`<sup>Required</sup> <a name="Density" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.density"></a>

```go
func Density() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Multikey`<sup>Required</sup> <a name="Multikey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikey"></a>

```go
func Multikey() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QueryScope`<sup>Required</sup> <a name="QueryScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScope"></a>

```go
func QueryScope() *string
```

- *Type:* *string

---

##### `SkipWait`<sup>Required</sup> <a name="SkipWait" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWait"></a>

```go
func SkipWait() interface{}
```

- *Type:* interface{}

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.unique"></a>

```go
func Unique() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreIndexConfig <a name="FirestoreIndexConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Collection: *string,
	Fields: interface{},
	ApiScope: *string,
	Database: *string,
	DeletionPolicy: *string,
	Density: *string,
	Id: *string,
	Multikey: interface{},
	Project: *string,
	QueryScope: *string,
	SkipWait: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firestoreIndex.FirestoreIndexTimeouts,
	Unique: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.collection">Collection</a></code> | <code>*string</code> | The collection being indexed. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.apiScope">ApiScope</a></code> | <code>*string</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.database">Database</a></code> | <code>*string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.density">Density</a></code> | <code>*string</code> | The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#id FirestoreIndex#id}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.multikey">Multikey</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#project FirestoreIndex#project}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.queryScope">QueryScope</a></code> | <code>*string</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.skipWait">SkipWait</a></code> | <code>interface{}</code> | Whether to skip waiting for the index to be created. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.unique">Unique</a></code> | <code>interface{}</code> | Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.collection"></a>

```go
Collection *string
```

- *Type:* *string

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#collection FirestoreIndex#collection}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#fields FirestoreIndex#fields}

---

##### `ApiScope`<sup>Optional</sup> <a name="ApiScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.apiScope"></a>

```go
ApiScope *string
```

- *Type:* *string

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#api_scope FirestoreIndex#api_scope}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#database FirestoreIndex#database}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#deletion_policy FirestoreIndex#deletion_policy}

---

##### `Density`<sup>Optional</sup> <a name="Density" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.density"></a>

```go
Density *string
```

- *Type:* *string

The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#density FirestoreIndex#density}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#id FirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Multikey`<sup>Optional</sup> <a name="Multikey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.multikey"></a>

```go
Multikey interface{}
```

- *Type:* interface{}

Optional.

Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#multikey FirestoreIndex#multikey}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#project FirestoreIndex#project}.

---

##### `QueryScope`<sup>Optional</sup> <a name="QueryScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.queryScope"></a>

```go
QueryScope *string
```

- *Type:* *string

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#query_scope FirestoreIndex#query_scope}

---

##### `SkipWait`<sup>Optional</sup> <a name="SkipWait" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.skipWait"></a>

```go
SkipWait interface{}
```

- *Type:* interface{}

Whether to skip waiting for the index to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#skip_wait FirestoreIndex#skip_wait}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.timeouts"></a>

```go
Timeouts FirestoreIndexTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#timeouts FirestoreIndex#timeouts}

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.unique"></a>

```go
Unique interface{}
```

- *Type:* interface{}

Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#unique FirestoreIndex#unique}

---

### FirestoreIndexFields <a name="FirestoreIndexFields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexFields {
	ArrayConfig: *string,
	FieldPath: *string,
	Order: *string,
	SearchConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firestoreIndex.FirestoreIndexFieldsSearchConfig,
	VectorConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firestoreIndex.FirestoreIndexFieldsVectorConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.arrayConfig">ArrayConfig</a></code> | <code>*string</code> | Indicates that this field supports operations on arrayValues. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.fieldPath">FieldPath</a></code> | <code>*string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.order">Order</a></code> | <code>*string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.searchConfig">SearchConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a></code> | search_config block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | vector_config block. |

---

##### `ArrayConfig`<sup>Optional</sup> <a name="ArrayConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.arrayConfig"></a>

```go
ArrayConfig *string
```

- *Type:* *string

Indicates that this field supports operations on arrayValues.

Only one of 'order', 'arrayConfig', 'searchConfig' and
'vectorConfig' can be specified. Possible values: ["CONTAINS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#array_config FirestoreIndex#array_config}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#field_path FirestoreIndex#field_path}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.order"></a>

```go
Order *string
```

- *Type:* *string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

Only one of 'order', 'arrayConfig', 'searchConfig' and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#order FirestoreIndex#order}

---

##### `SearchConfig`<sup>Optional</sup> <a name="SearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.searchConfig"></a>

```go
SearchConfig FirestoreIndexFieldsSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#search_config FirestoreIndex#search_config}

---

##### `VectorConfig`<sup>Optional</sup> <a name="VectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.vectorConfig"></a>

```go
VectorConfig FirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#vector_config FirestoreIndex#vector_config}

---

### FirestoreIndexFieldsSearchConfig <a name="FirestoreIndexFieldsSearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexFieldsSearchConfig {
	GeoSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec,
	TextSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.geoSpec">GeoSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a></code> | geo_spec block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.textSpec">TextSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a></code> | text_spec block. |

---

##### `GeoSpec`<sup>Optional</sup> <a name="GeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.geoSpec"></a>

```go
GeoSpec FirestoreIndexFieldsSearchConfigGeoSpec
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

geo_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#geo_spec FirestoreIndex#geo_spec}

---

##### `TextSpec`<sup>Optional</sup> <a name="TextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.textSpec"></a>

```go
TextSpec FirestoreIndexFieldsSearchConfigTextSpec
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

text_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#text_spec FirestoreIndex#text_spec}

---

### FirestoreIndexFieldsSearchConfigGeoSpec <a name="FirestoreIndexFieldsSearchConfigGeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexFieldsSearchConfigGeoSpec {
	GeoJsonIndexingDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled">GeoJsonIndexingDisabled</a></code> | <code>interface{}</code> | If true, disables GeoJSON indexing for the field. |

---

##### `GeoJsonIndexingDisabled`<sup>Required</sup> <a name="GeoJsonIndexingDisabled" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled"></a>

```go
GeoJsonIndexingDisabled interface{}
```

- *Type:* interface{}

If true, disables GeoJSON indexing for the field.

By default, GeoJSON points are indexed.
Firestore GeoPoints are indexed regardless of the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#geo_json_indexing_disabled FirestoreIndex#geo_json_indexing_disabled}

---

### FirestoreIndexFieldsSearchConfigTextSpec <a name="FirestoreIndexFieldsSearchConfigTextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexFieldsSearchConfigTextSpec {
	IndexSpecs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs">IndexSpecs</a></code> | <code>interface{}</code> | index_specs block. |

---

##### `IndexSpecs`<sup>Required</sup> <a name="IndexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs"></a>

```go
IndexSpecs interface{}
```

- *Type:* interface{}

index_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#index_specs FirestoreIndex#index_specs}

---

### FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs <a name="FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs {
	IndexType: *string,
	MatchType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType">IndexType</a></code> | <code>*string</code> | Ways to index the text field value. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType">MatchType</a></code> | <code>*string</code> | How to match the text field value. |

---

##### `IndexType`<sup>Optional</sup> <a name="IndexType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType"></a>

```go
IndexType *string
```

- *Type:* *string

Ways to index the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#index_type FirestoreIndex#index_type}

---

##### `MatchType`<sup>Optional</sup> <a name="MatchType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType"></a>

```go
MatchType *string
```

- *Type:* *string

How to match the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#match_type FirestoreIndex#match_type}

---

### FirestoreIndexFieldsVectorConfig <a name="FirestoreIndexFieldsVectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexFieldsVectorConfig {
	Dimension: *f64,
	Flat: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.dimension">Dimension</a></code> | <code>*f64</code> | The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | flat block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.dimension"></a>

```go
Dimension *f64
```

- *Type:* *f64

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#dimension FirestoreIndex#dimension}

---

##### `Flat`<sup>Optional</sup> <a name="Flat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.flat"></a>

```go
Flat FirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#flat FirestoreIndex#flat}

---

### FirestoreIndexFieldsVectorConfigFlat <a name="FirestoreIndexFieldsVectorConfigFlat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexFieldsVectorConfigFlat {

}
```


### FirestoreIndexTimeouts <a name="FirestoreIndexTimeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

&firestoreindex.FirestoreIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#create FirestoreIndex#create}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#delete FirestoreIndex#delete}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#update FirestoreIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#create FirestoreIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#delete FirestoreIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#update FirestoreIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreIndexFieldsList <a name="FirestoreIndexFieldsList" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirestoreIndexFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.get"></a>

```go
func Get(index *f64) FirestoreIndexFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirestoreIndexFieldsOutputReference <a name="FirestoreIndexFieldsOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirestoreIndexFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putSearchConfig">PutSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig">PutVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetArrayConfig">ResetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetSearchConfig">ResetSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetVectorConfig">ResetVectorConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSearchConfig` <a name="PutSearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putSearchConfig"></a>

```go
func PutSearchConfig(value FirestoreIndexFieldsSearchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

---

##### `PutVectorConfig` <a name="PutVectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig"></a>

```go
func PutVectorConfig(value FirestoreIndexFieldsVectorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---

##### `ResetArrayConfig` <a name="ResetArrayConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetArrayConfig"></a>

```go
func ResetArrayConfig()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetSearchConfig` <a name="ResetSearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetSearchConfig"></a>

```go
func ResetSearchConfig()
```

##### `ResetVectorConfig` <a name="ResetVectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetVectorConfig"></a>

```go
func ResetVectorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfig">SearchConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference">FirestoreIndexFieldsSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference">FirestoreIndexFieldsVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfigInput">ArrayConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfigInput">SearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfigInput">VectorConfigInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfig">ArrayConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SearchConfig`<sup>Required</sup> <a name="SearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfig"></a>

```go
func SearchConfig() FirestoreIndexFieldsSearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference">FirestoreIndexFieldsSearchConfigOutputReference</a>

---

##### `VectorConfig`<sup>Required</sup> <a name="VectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfig"></a>

```go
func VectorConfig() FirestoreIndexFieldsVectorConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference">FirestoreIndexFieldsVectorConfigOutputReference</a>

---

##### `ArrayConfigInput`<sup>Optional</sup> <a name="ArrayConfigInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfigInput"></a>

```go
func ArrayConfigInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `SearchConfigInput`<sup>Optional</sup> <a name="SearchConfigInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfigInput"></a>

```go
func SearchConfigInput() FirestoreIndexFieldsSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

---

##### `VectorConfigInput`<sup>Optional</sup> <a name="VectorConfigInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfigInput"></a>

```go
func VectorConfigInput() FirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---

##### `ArrayConfig`<sup>Required</sup> <a name="ArrayConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfig"></a>

```go
func ArrayConfig() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirestoreIndexFieldsSearchConfigGeoSpecOutputReference <a name="FirestoreIndexFieldsSearchConfigGeoSpecOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsSearchConfigGeoSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreIndexFieldsSearchConfigGeoSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput">GeoJsonIndexingDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled">GeoJsonIndexingDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GeoJsonIndexingDisabledInput`<sup>Optional</sup> <a name="GeoJsonIndexingDisabledInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput"></a>

```go
func GeoJsonIndexingDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `GeoJsonIndexingDisabled`<sup>Required</sup> <a name="GeoJsonIndexingDisabled" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled"></a>

```go
func GeoJsonIndexingDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreIndexFieldsSearchConfigGeoSpec
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

---


### FirestoreIndexFieldsSearchConfigOutputReference <a name="FirestoreIndexFieldsSearchConfigOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsSearchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreIndexFieldsSearchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec">PutGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putTextSpec">PutTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec">ResetGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec">ResetTextSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoSpec` <a name="PutGeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec"></a>

```go
func PutGeoSpec(value FirestoreIndexFieldsSearchConfigGeoSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `PutTextSpec` <a name="PutTextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putTextSpec"></a>

```go
func PutTextSpec(value FirestoreIndexFieldsSearchConfigTextSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putTextSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `ResetGeoSpec` <a name="ResetGeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec"></a>

```go
func ResetGeoSpec()
```

##### `ResetTextSpec` <a name="ResetTextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec"></a>

```go
func ResetTextSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec">GeoSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference">FirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpec">TextSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference">FirestoreIndexFieldsSearchConfigTextSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput">GeoSpecInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput">TextSpecInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GeoSpec`<sup>Required</sup> <a name="GeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec"></a>

```go
func GeoSpec() FirestoreIndexFieldsSearchConfigGeoSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference">FirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a>

---

##### `TextSpec`<sup>Required</sup> <a name="TextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpec"></a>

```go
func TextSpec() FirestoreIndexFieldsSearchConfigTextSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference">FirestoreIndexFieldsSearchConfigTextSpecOutputReference</a>

---

##### `GeoSpecInput`<sup>Optional</sup> <a name="GeoSpecInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput"></a>

```go
func GeoSpecInput() FirestoreIndexFieldsSearchConfigGeoSpec
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `TextSpecInput`<sup>Optional</sup> <a name="TextSpecInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput"></a>

```go
func TextSpecInput() FirestoreIndexFieldsSearchConfigTextSpec
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreIndexFieldsSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

---


### FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList <a name="FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get"></a>

```go
func Get(index *f64) FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference <a name="FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType">ResetIndexType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType">ResetMatchType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIndexType` <a name="ResetIndexType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType"></a>

```go
func ResetIndexType()
```

##### `ResetMatchType` <a name="ResetMatchType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType"></a>

```go
func ResetMatchType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput">IndexTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType">IndexType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexTypeInput`<sup>Optional</sup> <a name="IndexTypeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput"></a>

```go
func IndexTypeInput() *string
```

- *Type:* *string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput"></a>

```go
func MatchTypeInput() *string
```

- *Type:* *string

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType"></a>

```go
func IndexType() *string
```

- *Type:* *string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirestoreIndexFieldsSearchConfigTextSpecOutputReference <a name="FirestoreIndexFieldsSearchConfigTextSpecOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsSearchConfigTextSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreIndexFieldsSearchConfigTextSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs">PutIndexSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndexSpecs` <a name="PutIndexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs"></a>

```go
func PutIndexSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs">IndexSpecs</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput">IndexSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexSpecs`<sup>Required</sup> <a name="IndexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs"></a>

```go
func IndexSpecs() FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a>

---

##### `IndexSpecsInput`<sup>Optional</sup> <a name="IndexSpecsInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput"></a>

```go
func IndexSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreIndexFieldsSearchConfigTextSpec
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

---


### FirestoreIndexFieldsVectorConfigFlatOutputReference <a name="FirestoreIndexFieldsVectorConfigFlatOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsVectorConfigFlatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreIndexFieldsVectorConfigFlatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---


### FirestoreIndexFieldsVectorConfigOutputReference <a name="FirestoreIndexFieldsVectorConfigOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexFieldsVectorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreIndexFieldsVectorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat">PutFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetFlat">ResetFlat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlat` <a name="PutFlat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat"></a>

```go
func PutFlat(value FirestoreIndexFieldsVectorConfigFlat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetFlat` <a name="ResetFlat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetFlat"></a>

```go
func ResetFlat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference">FirestoreIndexFieldsVectorConfigFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flatInput">FlatInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimension">Dimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Flat`<sup>Required</sup> <a name="Flat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flat"></a>

```go
func Flat() FirestoreIndexFieldsVectorConfigFlatOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference">FirestoreIndexFieldsVectorConfigFlatOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() *f64
```

- *Type:* *f64

---

##### `FlatInput`<sup>Optional</sup> <a name="FlatInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flatInput"></a>

```go
func FlatInput() FirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimension"></a>

```go
func Dimension() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---


### FirestoreIndexTimeoutsOutputReference <a name="FirestoreIndexTimeoutsOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firestoreindex"

firestoreindex.NewFirestoreIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



