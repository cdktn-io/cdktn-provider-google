# `documentAiSchemaVersion` Submodule <a name="`documentAiSchemaVersion` Submodule" id="@cdktn/provider-google.documentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiSchemaVersion <a name="DocumentAiSchemaVersion" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersion(scope Construct, id *string, config DocumentAiSchemaVersionConfig) DocumentAiSchemaVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig">DocumentAiSchemaVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig">DocumentAiSchemaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema"></a>

```go
func PutSchema(value DocumentAiSchemaVersionSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts"></a>

```go
func PutTimeouts(value DocumentAiSchemaVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.DocumentAiSchemaVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.DocumentAiSchemaVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.DocumentAiSchemaVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.DocumentAiSchemaVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DocumentAiSchemaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema"></a>

```go
func Schema() DocumentAiSchemaVersionSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts"></a>

```go
func Timeouts() DocumentAiSchemaVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput"></a>

```go
func SchemaInput() DocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiSchemaVersionConfig <a name="DocumentAiSchemaVersionConfig" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

&documentaischemaversion.DocumentAiSchemaVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	Schema: github.com/cdktn-io/cdktn-provider-google-go/google/v22.documentAiSchemaVersion.DocumentAiSchemaVersionSchema,
	SchemaId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId">SchemaId</a></code> | <code>*string</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#location DocumentAiSchemaVersion#location}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema"></a>

```go
Schema DocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema DocumentAiSchemaVersion#schema}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema_id DocumentAiSchemaVersion#schema_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#deletion_policy DocumentAiSchemaVersion#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#labels DocumentAiSchemaVersion#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts"></a>

```go
Timeouts DocumentAiSchemaVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#timeouts DocumentAiSchemaVersion#timeouts}

---

### DocumentAiSchemaVersionSchema <a name="DocumentAiSchemaVersionSchema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

&documentaischemaversion.DocumentAiSchemaVersionSchema {
	Description: *string,
	DisplayName: *string,
	DocumentPrompt: *string,
	EntityTypes: interface{},
	Metadata: github.com/cdktn-io/cdktn-provider-google-go/google/v22.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description">Description</a></code> | <code>*string</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt">DocumentPrompt</a></code> | <code>*string</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes">EntityTypes</a></code> | <code>interface{}</code> | entity_types block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#description DocumentAiSchemaVersion#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `DocumentPrompt`<sup>Optional</sup> <a name="DocumentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```go
DocumentPrompt *string
```

- *Type:* *string

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_prompt DocumentAiSchemaVersion#document_prompt}

---

##### `EntityTypes`<sup>Optional</sup> <a name="EntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes"></a>

```go
EntityTypes interface{}
```

- *Type:* interface{}

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#entity_types DocumentAiSchemaVersion#entity_types}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata"></a>

```go
Metadata DocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#metadata DocumentAiSchemaVersion#metadata}

---

### DocumentAiSchemaVersionSchemaEntityTypes <a name="DocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

&documentaischemaversion.DocumentAiSchemaVersionSchemaEntityTypes {
	Name: *string,
	BaseTypes: *[]*string,
	DisplayName: *string,
	EnumValues: github.com/cdktn-io/cdktn-provider-google-go/google/v22.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues,
	Properties: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name">Name</a></code> | <code>*string</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">BaseTypes</a></code> | <code>*[]*string</code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName">DisplayName</a></code> | <code>*string</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties">Properties</a></code> | <code>interface{}</code> | properties block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `BaseTypes`<sup>Optional</sup> <a name="BaseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```go
BaseTypes *[]*string
```

- *Type:* *[]*string

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#base_types DocumentAiSchemaVersion#base_types}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `EnumValues`<sup>Optional</sup> <a name="EnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```go
EnumValues DocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#enum_values DocumentAiSchemaVersion#enum_values}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```go
Properties interface{}
```

- *Type:* interface{}

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#properties DocumentAiSchemaVersion#properties}

---

### DocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

&documentaischemaversion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">Values</a></code> | <code>*[]*string</code> | The individual values that this enum values type can include. |

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#values DocumentAiSchemaVersion#values}

---

### DocumentAiSchemaVersionSchemaEntityTypesProperties <a name="DocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

&documentaischemaversion.DocumentAiSchemaVersionSchemaEntityTypesProperties {
	Name: *string,
	ValueType: *string,
	DisplayName: *string,
	Method: *string,
	OccurrenceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">Name</a></code> | <code>*string</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">ValueType</a></code> | <code>*string</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">DisplayName</a></code> | <code>*string</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">Method</a></code> | <code>*string</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">OccurrenceType</a></code> | <code>*string</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#value_type DocumentAiSchemaVersion#value_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```go
Method *string
```

- *Type:* *string

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#method DocumentAiSchemaVersion#method}

---

##### `OccurrenceType`<sup>Optional</sup> <a name="OccurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```go
OccurrenceType *string
```

- *Type:* *string

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#occurrence_type DocumentAiSchemaVersion#occurrence_type}

---

### DocumentAiSchemaVersionSchemaMetadata <a name="DocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

&documentaischemaversion.DocumentAiSchemaVersionSchemaMetadata {
	DocumentAllowMultipleLabels: interface{},
	DocumentSplitter: interface{},
	PrefixedNamingOnProperties: interface{},
	SkipNamingValidation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>interface{}</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">DocumentSplitter</a></code> | <code>interface{}</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>interface{}</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>interface{}</code> | If set, this will skip the naming format validation in the schema. |

---

##### `DocumentAllowMultipleLabels`<sup>Optional</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```go
DocumentAllowMultipleLabels interface{}
```

- *Type:* interface{}

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_allow_multiple_labels DocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `DocumentSplitter`<sup>Optional</sup> <a name="DocumentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```go
DocumentSplitter interface{}
```

- *Type:* interface{}

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_splitter DocumentAiSchemaVersion#document_splitter}

---

##### `PrefixedNamingOnProperties`<sup>Optional</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```go
PrefixedNamingOnProperties interface{}
```

- *Type:* interface{}

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#prefixed_naming_on_properties DocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `SkipNamingValidation`<sup>Optional</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```go
SkipNamingValidation interface{}
```

- *Type:* interface{}

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#skip_naming_validation DocumentAiSchemaVersion#skip_naming_validation}

---

### DocumentAiSchemaVersionTimeouts <a name="DocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

&documentaischemaversion.DocumentAiSchemaVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### DocumentAiSchemaVersionSchemaEntityTypesList <a name="DocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionSchemaEntityTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DocumentAiSchemaVersionSchemaEntityTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```go
func Get(index *f64) DocumentAiSchemaVersionSchemaEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionSchemaEntityTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DocumentAiSchemaVersionSchemaEntityTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">PutEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">ResetBaseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">ResetEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnumValues` <a name="PutEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```go
func PutEnumValues(value DocumentAiSchemaVersionSchemaEntityTypesEnumValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```go
func PutProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseTypes` <a name="ResetBaseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```go
func ResetBaseTypes()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnumValues` <a name="ResetEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```go
func ResetEnumValues()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">BaseTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">EnumValuesInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">BaseTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnumValues`<sup>Required</sup> <a name="EnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```go
func EnumValues() DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```go
func Properties() DocumentAiSchemaVersionSchemaEntityTypesPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `BaseTypesInput`<sup>Optional</sup> <a name="BaseTypesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```go
func BaseTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnumValuesInput`<sup>Optional</sup> <a name="EnumValuesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```go
func EnumValuesInput() DocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `BaseTypes`<sup>Required</sup> <a name="BaseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```go
func BaseTypes() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionSchemaEntityTypesPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DocumentAiSchemaVersionSchemaEntityTypesPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```go
func Get(index *f64) DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">ResetOccurrenceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetOccurrenceType` <a name="ResetOccurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```go
func ResetOccurrenceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">OccurrenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">OccurrenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OccurrenceTypeInput`<sup>Optional</sup> <a name="OccurrenceTypeInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```go
func OccurrenceTypeInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OccurrenceType`<sup>Required</sup> <a name="OccurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```go
func OccurrenceType() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiSchemaVersionSchemaMetadataOutputReference <a name="DocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionSchemaMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiSchemaVersionSchemaMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">ResetDocumentAllowMultipleLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">ResetDocumentSplitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">ResetPrefixedNamingOnProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">ResetSkipNamingValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocumentAllowMultipleLabels` <a name="ResetDocumentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```go
func ResetDocumentAllowMultipleLabels()
```

##### `ResetDocumentSplitter` <a name="ResetDocumentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```go
func ResetDocumentSplitter()
```

##### `ResetPrefixedNamingOnProperties` <a name="ResetPrefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```go
func ResetPrefixedNamingOnProperties()
```

##### `ResetSkipNamingValidation` <a name="ResetSkipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```go
func ResetSkipNamingValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">DocumentAllowMultipleLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">DocumentSplitterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">PrefixedNamingOnPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">SkipNamingValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">DocumentSplitter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocumentAllowMultipleLabelsInput`<sup>Optional</sup> <a name="DocumentAllowMultipleLabelsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```go
func DocumentAllowMultipleLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentSplitterInput`<sup>Optional</sup> <a name="DocumentSplitterInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```go
func DocumentSplitterInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixedNamingOnPropertiesInput`<sup>Optional</sup> <a name="PrefixedNamingOnPropertiesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```go
func PrefixedNamingOnPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `SkipNamingValidationInput`<sup>Optional</sup> <a name="SkipNamingValidationInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```go
func SkipNamingValidationInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentAllowMultipleLabels`<sup>Required</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```go
func DocumentAllowMultipleLabels() interface{}
```

- *Type:* interface{}

---

##### `DocumentSplitter`<sup>Required</sup> <a name="DocumentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```go
func DocumentSplitter() interface{}
```

- *Type:* interface{}

---

##### `PrefixedNamingOnProperties`<sup>Required</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```go
func PrefixedNamingOnProperties() interface{}
```

- *Type:* interface{}

---

##### `SkipNamingValidation`<sup>Required</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```go
func SkipNamingValidation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---


### DocumentAiSchemaVersionSchemaOutputReference <a name="DocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiSchemaVersionSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">ResetDocumentPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">ResetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```go
func PutEntityTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```go
func PutMetadata(value DocumentAiSchemaVersionSchemaMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDocumentPrompt` <a name="ResetDocumentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```go
func ResetDocumentPrompt()
```

##### `ResetEntityTypes` <a name="ResetEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```go
func ResetEntityTypes()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">DocumentPromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">DocumentPrompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```go
func EntityTypes() DocumentAiSchemaVersionSchemaEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```go
func Metadata() DocumentAiSchemaVersionSchemaMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentPromptInput`<sup>Optional</sup> <a name="DocumentPromptInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```go
func DocumentPromptInput() *string
```

- *Type:* *string

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```go
func EntityTypesInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```go
func MetadataInput() DocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DocumentPrompt`<sup>Required</sup> <a name="DocumentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```go
func DocumentPrompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---


### DocumentAiSchemaVersionTimeoutsOutputReference <a name="DocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/documentaischemaversion"

documentaischemaversion.NewDocumentAiSchemaVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiSchemaVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



