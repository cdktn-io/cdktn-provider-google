# `apihubCuration` Submodule <a name="`apihubCuration` Submodule" id="@cdktn/provider-google.apihubCuration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubCuration <a name="ApihubCuration" id="@cdktn/provider-google.apihubCuration.ApihubCuration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation google_apihub_curation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubCuration.ApihubCuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.NewApihubCuration(scope Construct, id *string, config ApihubCurationConfig) ApihubCuration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig">ApihubCurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig">ApihubCurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubCuration.ApihubCuration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apihubCuration.ApihubCuration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apihubCuration.ApihubCuration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apihubCuration.ApihubCuration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apihubCuration.ApihubCuration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubCuration.ApihubCuration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apihubCuration.ApihubCuration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apihubCuration.ApihubCuration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apihubCuration.ApihubCuration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apihubCuration.ApihubCuration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubCuration.ApihubCuration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apihubCuration.ApihubCuration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apihubCuration.ApihubCuration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubCuration.ApihubCuration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubCuration.ApihubCuration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCuration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubCuration.ApihubCuration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apihubCuration.ApihubCuration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubCuration.ApihubCuration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apihubCuration.ApihubCuration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubCuration.ApihubCuration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktn/provider-google.apihubCuration.ApihubCuration.putEndpoint"></a>

```go
func PutEndpoint(value ApihubCurationEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubCuration.ApihubCuration.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apihubCuration.ApihubCuration.putTimeouts"></a>

```go
func PutTimeouts(value ApihubCurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubCuration.ApihubCuration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.apihubCuration.ApihubCuration.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.apihubCuration.ApihubCuration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.apihubCuration.ApihubCuration.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apihubCuration.ApihubCuration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApihubCuration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apihubCuration.ApihubCuration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.ApihubCuration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubCuration.ApihubCuration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apihubCuration.ApihubCuration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.ApihubCuration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubCuration.ApihubCuration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apihubCuration.ApihubCuration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.ApihubCuration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubCuration.ApihubCuration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apihubCuration.ApihubCuration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.ApihubCuration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApihubCuration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApihubCuration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApihubCuration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApihubCuration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference">ApihubCurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorCode">LastExecutionErrorCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorMessage">LastExecutionErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.lastExecutionState">LastExecutionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.pluginInstanceActions">PluginInstanceActions</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList">ApihubCurationPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference">ApihubCurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.curationIdInput">CurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.curationId">CurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.endpoint"></a>

```go
func Endpoint() ApihubCurationEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference">ApihubCurationEndpointOutputReference</a>

---

##### `LastExecutionErrorCode`<sup>Required</sup> <a name="LastExecutionErrorCode" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorCode"></a>

```go
func LastExecutionErrorCode() *string
```

- *Type:* *string

---

##### `LastExecutionErrorMessage`<sup>Required</sup> <a name="LastExecutionErrorMessage" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorMessage"></a>

```go
func LastExecutionErrorMessage() *string
```

- *Type:* *string

---

##### `LastExecutionState`<sup>Required</sup> <a name="LastExecutionState" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.lastExecutionState"></a>

```go
func LastExecutionState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PluginInstanceActions`<sup>Required</sup> <a name="PluginInstanceActions" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.pluginInstanceActions"></a>

```go
func PluginInstanceActions() ApihubCurationPluginInstanceActionsList
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList">ApihubCurationPluginInstanceActionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.timeouts"></a>

```go
func Timeouts() ApihubCurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference">ApihubCurationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CurationIdInput`<sup>Optional</sup> <a name="CurationIdInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.curationIdInput"></a>

```go
func CurationIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.endpointInput"></a>

```go
func EndpointInput() ApihubCurationEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CurationId`<sup>Required</sup> <a name="CurationId" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.curationId"></a>

```go
func CurationId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCuration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apihubCuration.ApihubCuration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubCurationConfig <a name="ApihubCurationConfig" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

&apihubcuration.ApihubCurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CurationId: *string,
	DisplayName: *string,
	Endpoint: github.com/cdktn-io/cdktn-provider-google-go/google/v19.apihubCuration.ApihubCurationEndpoint,
	Location: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.apihubCuration.ApihubCurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.curationId">CurationId</a></code> | <code>*string</code> | The ID to use for the curation resource, which will become the final component of the curations's resource name. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the curation. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.description">Description</a></code> | <code>*string</code> | The description of the curation. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#id ApihubCuration#id}. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#project ApihubCuration#project}. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurationId`<sup>Required</sup> <a name="CurationId" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.curationId"></a>

```go
CurationId *string
```

- *Type:* *string

The ID to use for the curation resource, which will become the final component of the curations's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified ID is already used by another curation resource in the API
  hub.
* If not provided, a system generated ID will be used.

This value should be 4-500 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#curation_id ApihubCuration#curation_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#display_name ApihubCuration#display_name}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.endpoint"></a>

```go
Endpoint ApihubCurationEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#endpoint ApihubCuration#endpoint}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#location ApihubCuration#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#deletion_policy ApihubCuration#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#description ApihubCuration#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#id ApihubCuration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#project ApihubCuration#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubCuration.ApihubCurationConfig.property.timeouts"></a>

```go
Timeouts ApihubCurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#timeouts ApihubCuration#timeouts}

---

### ApihubCurationEndpoint <a name="ApihubCurationEndpoint" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

&apihubcuration.ApihubCurationEndpoint {
	ApplicationIntegrationEndpointDetails: github.com/cdktn-io/cdktn-provider-google-go/google/v19.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint.property.applicationIntegrationEndpointDetails">ApplicationIntegrationEndpointDetails</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | application_integration_endpoint_details block. |

---

##### `ApplicationIntegrationEndpointDetails`<sup>Required</sup> <a name="ApplicationIntegrationEndpointDetails" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint.property.applicationIntegrationEndpointDetails"></a>

```go
ApplicationIntegrationEndpointDetails ApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

application_integration_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#application_integration_endpoint_details ApihubCuration#application_integration_endpoint_details}

---

### ApihubCurationEndpointApplicationIntegrationEndpointDetails <a name="ApihubCurationEndpointApplicationIntegrationEndpointDetails" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

&apihubcuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails {
	TriggerId: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId">TriggerId</a></code> | <code>*string</code> | The API trigger ID of the Application Integration workflow. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri">Uri</a></code> | <code>*string</code> | The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'. |

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId"></a>

```go
TriggerId *string
```

- *Type:* *string

The API trigger ID of the Application Integration workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#trigger_id ApihubCuration#trigger_id}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#uri ApihubCuration#uri}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubCurationPluginInstanceActions <a name="ApihubCurationPluginInstanceActions" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

&apihubcuration.ApihubCurationPluginInstanceActions {

}
```


### ApihubCurationTimeouts <a name="ApihubCurationTimeouts" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

&apihubcuration.ApihubCurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#create ApihubCuration#create}. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#delete ApihubCuration#delete}. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#update ApihubCuration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#create ApihubCuration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#delete ApihubCuration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apihub_curation#update ApihubCuration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference <a name="ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.NewApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput">TriggerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId">TriggerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TriggerIdInput`<sup>Optional</sup> <a name="TriggerIdInput" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput"></a>

```go
func TriggerIdInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId"></a>

```go
func TriggerId() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---


### ApihubCurationEndpointOutputReference <a name="ApihubCurationEndpointOutputReference" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.NewApihubCurationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubCurationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails">PutApplicationIntegrationEndpointDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationIntegrationEndpointDetails` <a name="PutApplicationIntegrationEndpointDetails" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails"></a>

```go
func PutApplicationIntegrationEndpointDetails(value ApihubCurationEndpointApplicationIntegrationEndpointDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails">ApplicationIntegrationEndpointDetails</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput">ApplicationIntegrationEndpointDetailsInput</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationIntegrationEndpointDetails`<sup>Required</sup> <a name="ApplicationIntegrationEndpointDetails" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails"></a>

```go
func ApplicationIntegrationEndpointDetails() ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a>

---

##### `ApplicationIntegrationEndpointDetailsInput`<sup>Optional</sup> <a name="ApplicationIntegrationEndpointDetailsInput" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput"></a>

```go
func ApplicationIntegrationEndpointDetailsInput() ApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubCurationEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

---


### ApihubCurationPluginInstanceActionsList <a name="ApihubCurationPluginInstanceActionsList" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.NewApihubCurationPluginInstanceActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApihubCurationPluginInstanceActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.get"></a>

```go
func Get(index *f64) ApihubCurationPluginInstanceActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApihubCurationPluginInstanceActionsOutputReference <a name="ApihubCurationPluginInstanceActionsOutputReference" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.NewApihubCurationPluginInstanceActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApihubCurationPluginInstanceActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActions">ApihubCurationPluginInstanceActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubCurationPluginInstanceActions
```

- *Type:* <a href="#@cdktn/provider-google.apihubCuration.ApihubCurationPluginInstanceActions">ApihubCurationPluginInstanceActions</a>

---


### ApihubCurationTimeoutsOutputReference <a name="ApihubCurationTimeoutsOutputReference" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/apihubcuration"

apihubcuration.NewApihubCurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubCurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



