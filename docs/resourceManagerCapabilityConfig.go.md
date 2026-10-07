# `resourceManagerCapabilityConfig` Submodule <a name="`resourceManagerCapabilityConfig` Submodule" id="@cdktn/provider-google.resourceManagerCapabilityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerCapabilityConfigA <a name="ResourceManagerCapabilityConfigA" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config google_resource_manager_capability_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

resourcemanagercapabilityconfig.NewResourceManagerCapabilityConfigA(scope Construct, id *string, config ResourceManagerCapabilityConfigAConfig) ResourceManagerCapabilityConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig">ResourceManagerCapabilityConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig">ResourceManagerCapabilityConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject">ResetManagementProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts"></a>

```go
func PutTimeouts(value ResourceManagerCapabilityConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId"></a>

```go
func ResetId()
```

##### `ResetManagementProject` <a name="ResetManagementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject"></a>

```go
func ResetManagementProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

resourcemanagercapabilityconfig.ResourceManagerCapabilityConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

resourcemanagercapabilityconfig.ResourceManagerCapabilityConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

resourcemanagercapabilityconfig.ResourceManagerCapabilityConfigA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

resourcemanagercapabilityconfig.ResourceManagerCapabilityConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceManagerCapabilityConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceManagerCapabilityConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerCapabilityConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput">CapabilityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput">ManagementProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput">TypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId">CapabilityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject">ManagementProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts"></a>

```go
func Timeouts() ResourceManagerCapabilityConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CapabilityConfigIdInput`<sup>Optional</sup> <a name="CapabilityConfigIdInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput"></a>

```go
func CapabilityConfigIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementProjectInput`<sup>Optional</sup> <a name="ManagementProjectInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput"></a>

```go
func ManagementProjectInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput"></a>

```go
func TypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CapabilityConfigId`<sup>Required</sup> <a name="CapabilityConfigId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId"></a>

```go
func CapabilityConfigId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementProject`<sup>Required</sup> <a name="ManagementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject"></a>

```go
func ManagementProject() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerCapabilityConfigAConfig <a name="ResourceManagerCapabilityConfigAConfig" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

&resourcemanagercapabilityconfig.ResourceManagerCapabilityConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CapabilityConfigId: *string,
	Parent: *string,
	Types: *[]*string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	ManagementProject: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId">CapabilityConfigId</a></code> | <code>*string</code> | User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types">Types</a></code> | <code>*[]*string</code> | The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-defined name for the capability config. Must be between 4 and 30 characters. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject">ManagementProject</a></code> | <code>*string</code> | The management project for the capability config. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapabilityConfigId`<sup>Required</sup> <a name="CapabilityConfigId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId"></a>

```go
CapabilityConfigId *string
```

- *Type:* *string

User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#capability_config_id ResourceManagerCapabilityConfigA#capability_config_id}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#parent ResourceManagerCapabilityConfigA#parent}

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types"></a>

```go
Types *[]*string
```

- *Type:* *[]*string

The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#types ResourceManagerCapabilityConfigA#types}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#deletion_policy ResourceManagerCapabilityConfigA#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-defined name for the capability config. Must be between 4 and 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#display_name ResourceManagerCapabilityConfigA#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementProject`<sup>Optional</sup> <a name="ManagementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject"></a>

```go
ManagementProject *string
```

- *Type:* *string

The management project for the capability config.

If unspecified, a project will be created automatically.
Must be specified for project-scoped capability config.
Format: 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#management_project ResourceManagerCapabilityConfigA#management_project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts"></a>

```go
Timeouts ResourceManagerCapabilityConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#timeouts ResourceManagerCapabilityConfigA#timeouts}

---

### ResourceManagerCapabilityConfigTimeouts <a name="ResourceManagerCapabilityConfigTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

&resourcemanagercapabilityconfig.ResourceManagerCapabilityConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerCapabilityConfigTimeoutsOutputReference <a name="ResourceManagerCapabilityConfigTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/resourcemanagercapabilityconfig"

resourcemanagercapabilityconfig.NewResourceManagerCapabilityConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceManagerCapabilityConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



