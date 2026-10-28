# `resourceManagerBoundary` Submodule <a name="`resourceManagerBoundary` Submodule" id="@cdktn/provider-google.resourceManagerBoundary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerBoundary <a name="ResourceManagerBoundary" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary google_resource_manager_boundary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.NewResourceManagerBoundary(scope Construct, id *string, config ResourceManagerBoundaryConfig) ResourceManagerBoundary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig">ResourceManagerBoundaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig">ResourceManagerBoundaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putResourceFilter">PutResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetResourceFilter">ResetResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceFilter` <a name="PutResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putResourceFilter"></a>

```go
func PutResourceFilter(value ResourceManagerBoundaryResourceFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putResourceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putTimeouts"></a>

```go
func PutTimeouts(value ResourceManagerBoundaryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceFilter` <a name="ResetResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetResourceFilter"></a>

```go
func ResetResourceFilter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagerBoundary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.ResourceManagerBoundary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.ResourceManagerBoundary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.ResourceManagerBoundary_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.ResourceManagerBoundary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ResourceManagerBoundary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceManagerBoundary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceManagerBoundary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerBoundary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.managementProject">ManagementProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference">ResourceManagerBoundaryResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference">ResourceManagerBoundaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryIdInput">BoundaryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilterInput">ResourceFilterInput</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryId">BoundaryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ManagementProject`<sup>Required</sup> <a name="ManagementProject" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.managementProject"></a>

```go
func ManagementProject() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceFilter`<sup>Required</sup> <a name="ResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilter"></a>

```go
func ResourceFilter() ResourceManagerBoundaryResourceFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference">ResourceManagerBoundaryResourceFilterOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeouts"></a>

```go
func Timeouts() ResourceManagerBoundaryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference">ResourceManagerBoundaryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BoundaryIdInput`<sup>Optional</sup> <a name="BoundaryIdInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryIdInput"></a>

```go
func BoundaryIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ResourceFilterInput`<sup>Optional</sup> <a name="ResourceFilterInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilterInput"></a>

```go
func ResourceFilterInput() ResourceManagerBoundaryResourceFilter
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BoundaryId`<sup>Required</sup> <a name="BoundaryId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryId"></a>

```go
func BoundaryId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerBoundaryConfig <a name="ResourceManagerBoundaryConfig" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

&resourcemanagerboundary.ResourceManagerBoundaryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BoundaryId: *string,
	Parent: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	ResourceFilter: github.com/cdktn-io/cdktn-provider-google-go/google/v22.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.resourceManagerBoundary.ResourceManagerBoundaryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.boundaryId">BoundaryId</a></code> | <code>*string</code> | The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable display name of the Boundary. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#id ResourceManagerBoundary#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a></code> | resource_filter block. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BoundaryId`<sup>Required</sup> <a name="BoundaryId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.boundaryId"></a>

```go
BoundaryId *string
```

- *Type:* *string

The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name.

Must be unique within the parent.
Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
with a letter, and may not end with a hyphen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#boundary_id ResourceManagerBoundary#boundary_id}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#parent ResourceManagerBoundary#parent}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#deletion_policy ResourceManagerBoundary#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable display name of the Boundary.

When present it must be
between 4 and 30 characters. Allowed characters are lowercase and
uppercase letters, numbers, hyphen, single-quote, double-quote, space,
and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#display_name ResourceManagerBoundary#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#id ResourceManagerBoundary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceFilter`<sup>Optional</sup> <a name="ResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.resourceFilter"></a>

```go
ResourceFilter ResourceManagerBoundaryResourceFilter
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#resource_filter ResourceManagerBoundary#resource_filter}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.timeouts"></a>

```go
Timeouts ResourceManagerBoundaryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#timeouts ResourceManagerBoundary#timeouts}

---

### ResourceManagerBoundaryResourceFilter <a name="ResourceManagerBoundaryResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

&resourcemanagerboundary.ResourceManagerBoundaryResourceFilter {
	TagFilter: github.com/cdktn-io/cdktn-provider-google-go/google/v22.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter.property.tagFilter">TagFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a></code> | tag_filter block. |

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter.property.tagFilter"></a>

```go
TagFilter ResourceManagerBoundaryResourceFilterTagFilter
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#tag_filter ResourceManagerBoundary#tag_filter}

---

### ResourceManagerBoundaryResourceFilterTagFilter <a name="ResourceManagerBoundaryResourceFilterTagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

&resourcemanagerboundary.ResourceManagerBoundaryResourceFilterTagFilter {
	TagKey: *string,
	TagValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagKey">TagKey</a></code> | <code>*string</code> | The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagValue">TagValue</a></code> | <code>*string</code> | The allowed short name of the tag value, for example 'production'. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#tag_key ResourceManagerBoundary#tag_key}

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

The allowed short name of the tag value, for example 'production'.

A project matches this tag filter if its effective tag value for
the given 'tagKey' matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#tag_value ResourceManagerBoundary#tag_value}

---

### ResourceManagerBoundaryTimeouts <a name="ResourceManagerBoundaryTimeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

&resourcemanagerboundary.ResourceManagerBoundaryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#create ResourceManagerBoundary#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#delete ResourceManagerBoundary#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#update ResourceManagerBoundary#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#create ResourceManagerBoundary#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#delete ResourceManagerBoundary#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#update ResourceManagerBoundary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerBoundaryResourceFilterOutputReference <a name="ResourceManagerBoundaryResourceFilterOutputReference" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.NewResourceManagerBoundaryResourceFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceManagerBoundaryResourceFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.putTagFilter">PutTagFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagFilter` <a name="PutTagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.putTagFilter"></a>

```go
func PutTagFilter(value ResourceManagerBoundaryResourceFilterTagFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.putTagFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter">TagFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference">ResourceManagerBoundaryResourceFilterTagFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput">TagFilterInput</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter"></a>

```go
func TagFilter() ResourceManagerBoundaryResourceFilterTagFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference">ResourceManagerBoundaryResourceFilterTagFilterOutputReference</a>

---

##### `TagFilterInput`<sup>Optional</sup> <a name="TagFilterInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput"></a>

```go
func TagFilterInput() ResourceManagerBoundaryResourceFilterTagFilter
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceManagerBoundaryResourceFilter
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

---


### ResourceManagerBoundaryResourceFilterTagFilterOutputReference <a name="ResourceManagerBoundaryResourceFilterTagFilterOutputReference" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.NewResourceManagerBoundaryResourceFilterTagFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceManagerBoundaryResourceFilterTagFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourceManagerBoundaryResourceFilterTagFilter
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

---


### ResourceManagerBoundaryTimeoutsOutputReference <a name="ResourceManagerBoundaryTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/resourcemanagerboundary"

resourcemanagerboundary.NewResourceManagerBoundaryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceManagerBoundaryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



