# `firestoreChangeStream` Submodule <a name="`firestoreChangeStream` Submodule" id="@cdktn/provider-google.firestoreChangeStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreChangeStream <a name="FirestoreChangeStream" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream google_firestore_change_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.NewFirestoreChangeStream(scope Construct, id *string, config FirestoreChangeStreamConfig) FirestoreChangeStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig">FirestoreChangeStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig">FirestoreChangeStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope">PutCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope">PutDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetCollectionGroupScope">ResetCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabaseScope">ResetDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCollectionGroupScope` <a name="PutCollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope"></a>

```go
func PutCollectionGroupScope(value FirestoreChangeStreamCollectionGroupScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putCollectionGroupScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---

##### `PutDatabaseScope` <a name="PutDatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope"></a>

```go
func PutDatabaseScope(value FirestoreChangeStreamDatabaseScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putDatabaseScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts"></a>

```go
func PutTimeouts(value FirestoreChangeStreamTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

---

##### `ResetCollectionGroupScope` <a name="ResetCollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetCollectionGroupScope"></a>

```go
func ResetCollectionGroupScope()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDatabaseScope` <a name="ResetDatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDatabaseScope"></a>

```go
func ResetDatabaseScope()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FirestoreChangeStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.FirestoreChangeStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.FirestoreChangeStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.FirestoreChangeStream_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.FirestoreChangeStream_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FirestoreChangeStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirestoreChangeStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirestoreChangeStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FirestoreChangeStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScope">CollectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference">FirestoreChangeStreamCollectionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScope">DatabaseScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference">FirestoreChangeStreamDatabaseScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference">FirestoreChangeStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScopeInput">CollectionGroupScopeInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScopeInput">DatabaseScopeInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionGroupScope`<sup>Required</sup> <a name="CollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScope"></a>

```go
func CollectionGroupScope() FirestoreChangeStreamCollectionGroupScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference">FirestoreChangeStreamCollectionGroupScopeOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DatabaseScope`<sup>Required</sup> <a name="DatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScope"></a>

```go
func DatabaseScope() FirestoreChangeStreamDatabaseScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference">FirestoreChangeStreamDatabaseScopeOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeouts"></a>

```go
func Timeouts() FirestoreChangeStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference">FirestoreChangeStreamTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CollectionGroupScopeInput`<sup>Optional</sup> <a name="CollectionGroupScopeInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.collectionGroupScopeInput"></a>

```go
func CollectionGroupScopeInput() FirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DatabaseScopeInput`<sup>Optional</sup> <a name="DatabaseScopeInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.databaseScopeInput"></a>

```go
func DatabaseScopeInput() FirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.retentionPeriod"></a>

```go
func RetentionPeriod() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreChangeStreamCollectionGroupScope <a name="FirestoreChangeStreamCollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

&firestorechangestream.FirestoreChangeStreamCollectionGroupScope {
	CollectionGroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.property.collectionGroupId">CollectionGroupId</a></code> | <code>*string</code> | The ID of the collection group to track. |

---

##### `CollectionGroupId`<sup>Required</sup> <a name="CollectionGroupId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope.property.collectionGroupId"></a>

```go
CollectionGroupId *string
```

- *Type:* *string

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#collection_group_id FirestoreChangeStream#collection_group_id}

---

### FirestoreChangeStreamConfig <a name="FirestoreChangeStreamConfig" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

&firestorechangestream.FirestoreChangeStreamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RetentionPeriod: *string,
	CollectionGroupScope: github.com/cdktn-io/cdktn-provider-google-go/google/v20.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope,
	Database: *string,
	DatabaseScope: github.com/cdktn-io/cdktn-provider-google-go/google/v20.firestoreChangeStream.FirestoreChangeStreamDatabaseScope,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.firestoreChangeStream.FirestoreChangeStreamTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.name">Name</a></code> | <code>*string</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.collectionGroupScope">CollectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.database">Database</a></code> | <code>*string</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.databaseScope">DatabaseScope</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#name FirestoreChangeStream#name}

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.retentionPeriod"></a>

```go
RetentionPeriod *string
```

- *Type:* *string

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#retention_period FirestoreChangeStream#retention_period}

---

##### `CollectionGroupScope`<sup>Optional</sup> <a name="CollectionGroupScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.collectionGroupScope"></a>

```go
CollectionGroupScope FirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#collection_group_scope FirestoreChangeStream#collection_group_scope}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#database FirestoreChangeStream#database}

---

##### `DatabaseScope`<sup>Optional</sup> <a name="DatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.databaseScope"></a>

```go
DatabaseScope FirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#database_scope FirestoreChangeStream#database_scope}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#deletion_policy FirestoreChangeStream#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#id FirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#project FirestoreChangeStream#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamConfig.property.timeouts"></a>

```go
Timeouts FirestoreChangeStreamTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts">FirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#timeouts FirestoreChangeStream#timeouts}

---

### FirestoreChangeStreamDatabaseScope <a name="FirestoreChangeStreamDatabaseScope" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

&firestorechangestream.FirestoreChangeStreamDatabaseScope {

}
```


### FirestoreChangeStreamTimeouts <a name="FirestoreChangeStreamTimeouts" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

&firestorechangestream.FirestoreChangeStreamTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#create FirestoreChangeStream#create}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#delete FirestoreChangeStream#delete}. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#update FirestoreChangeStream#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#create FirestoreChangeStream#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#delete FirestoreChangeStream#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/firestore_change_stream#update FirestoreChangeStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreChangeStreamCollectionGroupScopeOutputReference <a name="FirestoreChangeStreamCollectionGroupScopeOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.NewFirestoreChangeStreamCollectionGroupScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreChangeStreamCollectionGroupScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput">CollectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId">CollectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionGroupIdInput`<sup>Optional</sup> <a name="CollectionGroupIdInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput"></a>

```go
func CollectionGroupIdInput() *string
```

- *Type:* *string

---

##### `CollectionGroupId`<sup>Required</sup> <a name="CollectionGroupId" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId"></a>

```go
func CollectionGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamCollectionGroupScope">FirestoreChangeStreamCollectionGroupScope</a>

---


### FirestoreChangeStreamDatabaseScopeOutputReference <a name="FirestoreChangeStreamDatabaseScopeOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.NewFirestoreChangeStreamDatabaseScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreChangeStreamDatabaseScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() FirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamDatabaseScope">FirestoreChangeStreamDatabaseScope</a>

---


### FirestoreChangeStreamTimeoutsOutputReference <a name="FirestoreChangeStreamTimeoutsOutputReference" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/firestorechangestream"

firestorechangestream.NewFirestoreChangeStreamTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirestoreChangeStreamTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firestoreChangeStream.FirestoreChangeStreamTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



