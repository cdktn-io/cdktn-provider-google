# `apihubAddon` Submodule <a name="`apihubAddon` Submodule" id="@cdktn/provider-google.apihubAddon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubAddon <a name="ApihubAddon" id="@cdktn/provider-google.apihubAddon.ApihubAddon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon google_apihub_addon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddon(scope Construct, id *string, config ApihubAddonConfig) ApihubAddon
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig">ApihubAddonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig">ApihubAddonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig"></a>

```go
func PutConfig(value ApihubAddonConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts"></a>

```go
func PutTimeouts(value ApihubAddonTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.ApihubAddon_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.ApihubAddon_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.ApihubAddon_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.ApihubAddon_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApihubAddon to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApihubAddon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApihubAddon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId">BoostSpecGeminiRegionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput">AddonIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId">AddonId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BoostSpecGeminiRegionId`<sup>Required</sup> <a name="BoostSpecGeminiRegionId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId"></a>

```go
func BoostSpecGeminiRegionId() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.config"></a>

```go
func Config() ApihubAddonConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts"></a>

```go
func Timeouts() ApihubAddonTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AddonIdInput`<sup>Optional</sup> <a name="AddonIdInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput"></a>

```go
func AddonIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput"></a>

```go
func ConfigInput() ApihubAddonConfigA
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AddonId`<sup>Required</sup> <a name="AddonId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId"></a>

```go
func AddonId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubAddonConfig <a name="ApihubAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AddonId: *string,
	Config: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigA,
	Location: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId">AddonId</a></code> | <code>*string</code> | The ID of the addon. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddonId`<sup>Required</sup> <a name="AddonId" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId"></a>

```go
AddonId *string
```

- *Type:* *string

The ID of the addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#addon_id ApihubAddon#addon_id}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config"></a>

```go
Config ApihubAddonConfigA
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#config ApihubAddon#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#location ApihubAddon#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts"></a>

```go
Timeouts ApihubAddonTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#timeouts ApihubAddon#timeouts}

---

### ApihubAddonConfigA <a name="ApihubAddonConfigA" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigA {
	AllDataAddonConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigAllDataAddonConfig,
	GatewayPluginAddonConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig">AllDataAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | all_data_addon_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig">GatewayPluginAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | gateway_plugin_addon_config block. |

---

##### `AllDataAddonConfig`<sup>Optional</sup> <a name="AllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig"></a>

```go
AllDataAddonConfig ApihubAddonConfigAllDataAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

all_data_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_data_addon_config ApihubAddon#all_data_addon_config}

---

##### `GatewayPluginAddonConfig`<sup>Optional</sup> <a name="GatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig"></a>

```go
GatewayPluginAddonConfig ApihubAddonConfigGatewayPluginAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

gateway_plugin_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_addon_config ApihubAddon#gateway_plugin_addon_config}

---

### ApihubAddonConfigAllDataAddonConfig <a name="ApihubAddonConfigAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigAllDataAddonConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If true, the addon is enabled for all data in the API hub. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If true, the addon is enabled for all data in the API hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#enabled ApihubAddon#enabled}

---

### ApihubAddonConfigGatewayPluginAddonConfig <a name="ApihubAddonConfigGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfig {
	GatewayPluginConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs">GatewayPluginConfigs</a></code> | <code>interface{}</code> | gateway_plugin_configs block. |

---

##### `GatewayPluginConfigs`<sup>Required</sup> <a name="GatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs"></a>

```go
GatewayPluginConfigs interface{}
```

- *Type:* interface{}

gateway_plugin_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_configs ApihubAddon#gateway_plugin_configs}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs {
	PluginInstance: *string,
	ApigeeEdgeConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig,
	ApigeeOpdkConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig,
	ApigeeXHybridConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig">ApigeeEdgeConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | apigee_edge_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig">ApigeeOpdkConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | apigee_opdk_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig">ApigeeXHybridConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | apigee_x_hybrid_config block. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance"></a>

```go
PluginInstance *string
```

- *Type:* *string

The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#plugin_instance ApihubAddon#plugin_instance}

---

##### `ApigeeEdgeConfig`<sup>Optional</sup> <a name="ApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig"></a>

```go
ApigeeEdgeConfig ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

apigee_edge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_edge_config ApihubAddon#apigee_edge_config}

---

##### `ApigeeOpdkConfig`<sup>Optional</sup> <a name="ApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig"></a>

```go
ApigeeOpdkConfig ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

apigee_opdk_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_opdk_config ApihubAddon#apigee_opdk_config}

---

##### `ApigeeXHybridConfig`<sup>Optional</sup> <a name="ApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig"></a>

```go
ApigeeXHybridConfig ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

apigee_x_hybrid_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_x_hybrid_config ApihubAddon#apigee_x_hybrid_config}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig {
	EnvironmentFilter: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `EnvironmentFilter`<sup>Optional</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter"></a>

```go
EnvironmentFilter ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter {
	AllEnvironments: interface{},
	Environments: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments">AllEnvironments</a></code> | <code>interface{}</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments">Environments</a></code> | <code>*[]*string</code> | If provided, only environments in this list are matched. |

---

##### `AllEnvironments`<sup>Optional</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments"></a>

```go
AllEnvironments interface{}
```

- *Type:* interface{}

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `Environments`<sup>Optional</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments"></a>

```go
Environments *[]*string
```

- *Type:* *[]*string

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig {
	EnvironmentFilter: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `EnvironmentFilter`<sup>Optional</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter"></a>

```go
EnvironmentFilter ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter {
	AllEnvironments: interface{},
	Environments: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments">AllEnvironments</a></code> | <code>interface{}</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments">Environments</a></code> | <code>*[]*string</code> | If provided, only environments in this list are matched. |

---

##### `AllEnvironments`<sup>Optional</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments"></a>

```go
AllEnvironments interface{}
```

- *Type:* interface{}

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `Environments`<sup>Optional</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments"></a>

```go
Environments *[]*string
```

- *Type:* *[]*string

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig {
	EnvironmentFilter: github.com/cdktn-io/cdktn-provider-google-go/google/v22.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `EnvironmentFilter`<sup>Optional</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter"></a>

```go
EnvironmentFilter ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter {
	AllEnvironments: interface{},
	Environments: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments">AllEnvironments</a></code> | <code>interface{}</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments">Environments</a></code> | <code>*[]*string</code> | If provided, only environments in this list are matched. |

---

##### `AllEnvironments`<sup>Optional</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments"></a>

```go
AllEnvironments interface{}
```

- *Type:* interface{}

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `Environments`<sup>Optional</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments"></a>

```go
Environments *[]*string
```

- *Type:* *[]*string

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonTimeouts <a name="ApihubAddonTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

&apihubaddon.ApihubAddonTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubAddonConfigAllDataAddonConfigOutputReference <a name="ApihubAddonConfigAllDataAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigAllDataAddonConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigAllDataAddonConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigAllDataAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---


### ApihubAddonConfigAOutputReference <a name="ApihubAddonConfigAOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig">PutAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig">PutGatewayPluginAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig">ResetAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig">ResetGatewayPluginAddonConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllDataAddonConfig` <a name="PutAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig"></a>

```go
func PutAllDataAddonConfig(value ApihubAddonConfigAllDataAddonConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---

##### `PutGatewayPluginAddonConfig` <a name="PutGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig"></a>

```go
func PutGatewayPluginAddonConfig(value ApihubAddonConfigGatewayPluginAddonConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---

##### `ResetAllDataAddonConfig` <a name="ResetAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig"></a>

```go
func ResetAllDataAddonConfig()
```

##### `ResetGatewayPluginAddonConfig` <a name="ResetGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig"></a>

```go
func ResetGatewayPluginAddonConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig">AllDataAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig">GatewayPluginAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput">AllDataAddonConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput">GatewayPluginAddonConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllDataAddonConfig`<sup>Required</sup> <a name="AllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig"></a>

```go
func AllDataAddonConfig() ApihubAddonConfigAllDataAddonConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a>

---

##### `GatewayPluginAddonConfig`<sup>Required</sup> <a name="GatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig"></a>

```go
func GatewayPluginAddonConfig() ApihubAddonConfigGatewayPluginAddonConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a>

---

##### `AllDataAddonConfigInput`<sup>Optional</sup> <a name="AllDataAddonConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput"></a>

```go
func AllDataAddonConfigInput() ApihubAddonConfigAllDataAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---

##### `GatewayPluginAddonConfigInput`<sup>Optional</sup> <a name="GatewayPluginAddonConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput"></a>

```go
func GatewayPluginAddonConfigInput() ApihubAddonConfigGatewayPluginAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigA
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments">ResetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments">ResetEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllEnvironments` <a name="ResetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```go
func ResetAllEnvironments()
```

##### `ResetEnvironments` <a name="ResetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```go
func ResetEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">AllEnvironmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput">EnvironmentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments">AllEnvironments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments">Environments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllEnvironmentsInput`<sup>Optional</sup> <a name="AllEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```go
func AllEnvironmentsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```go
func EnvironmentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllEnvironments`<sup>Required</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```go
func AllEnvironments() interface{}
```

- *Type:* interface{}

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments"></a>

```go
func Environments() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter">PutEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter">ResetEnvironmentFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentFilter` <a name="PutEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter"></a>

```go
func PutEnvironmentFilter(value ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---

##### `ResetEnvironmentFilter` <a name="ResetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter"></a>

```go
func ResetEnvironmentFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput">EnvironmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentFilter`<sup>Required</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter"></a>

```go
func EnvironmentFilter() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a>

---

##### `EnvironmentFilterInput`<sup>Optional</sup> <a name="EnvironmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput"></a>

```go
func EnvironmentFilterInput() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments">ResetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments">ResetEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllEnvironments` <a name="ResetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```go
func ResetAllEnvironments()
```

##### `ResetEnvironments` <a name="ResetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```go
func ResetEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">AllEnvironmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput">EnvironmentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments">AllEnvironments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments">Environments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllEnvironmentsInput`<sup>Optional</sup> <a name="AllEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```go
func AllEnvironmentsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```go
func EnvironmentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllEnvironments`<sup>Required</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```go
func AllEnvironments() interface{}
```

- *Type:* interface{}

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments"></a>

```go
func Environments() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter">PutEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter">ResetEnvironmentFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentFilter` <a name="PutEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter"></a>

```go
func PutEnvironmentFilter(value ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---

##### `ResetEnvironmentFilter` <a name="ResetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter"></a>

```go
func ResetEnvironmentFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput">EnvironmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentFilter`<sup>Required</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter"></a>

```go
func EnvironmentFilter() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a>

---

##### `EnvironmentFilterInput`<sup>Optional</sup> <a name="EnvironmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput"></a>

```go
func EnvironmentFilterInput() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments">ResetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments">ResetEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllEnvironments` <a name="ResetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```go
func ResetAllEnvironments()
```

##### `ResetEnvironments` <a name="ResetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```go
func ResetEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">AllEnvironmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput">EnvironmentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments">AllEnvironments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments">Environments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllEnvironmentsInput`<sup>Optional</sup> <a name="AllEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```go
func AllEnvironmentsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```go
func EnvironmentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllEnvironments`<sup>Required</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```go
func AllEnvironments() interface{}
```

- *Type:* interface{}

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments"></a>

```go
func Environments() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter">PutEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter">ResetEnvironmentFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentFilter` <a name="PutEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter"></a>

```go
func PutEnvironmentFilter(value ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---

##### `ResetEnvironmentFilter` <a name="ResetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter"></a>

```go
func ResetEnvironmentFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput">EnvironmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentFilter`<sup>Required</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter"></a>

```go
func EnvironmentFilter() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a>

---

##### `EnvironmentFilterInput`<sup>Optional</sup> <a name="EnvironmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput"></a>

```go
func EnvironmentFilterInput() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get"></a>

```go
func Get(index *f64) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig">PutApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig">PutApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig">PutApigeeXHybridConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig">ResetApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig">ResetApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig">ResetApigeeXHybridConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApigeeEdgeConfig` <a name="PutApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig"></a>

```go
func PutApigeeEdgeConfig(value ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---

##### `PutApigeeOpdkConfig` <a name="PutApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig"></a>

```go
func PutApigeeOpdkConfig(value ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---

##### `PutApigeeXHybridConfig` <a name="PutApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig"></a>

```go
func PutApigeeXHybridConfig(value ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---

##### `ResetApigeeEdgeConfig` <a name="ResetApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig"></a>

```go
func ResetApigeeEdgeConfig()
```

##### `ResetApigeeOpdkConfig` <a name="ResetApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig"></a>

```go
func ResetApigeeOpdkConfig()
```

##### `ResetApigeeXHybridConfig` <a name="ResetApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig"></a>

```go
func ResetApigeeXHybridConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig">ApigeeEdgeConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig">ApigeeOpdkConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig">ApigeeXHybridConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput">ApigeeEdgeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput">ApigeeOpdkConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput">ApigeeXHybridConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApigeeEdgeConfig`<sup>Required</sup> <a name="ApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig"></a>

```go
func ApigeeEdgeConfig() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a>

---

##### `ApigeeOpdkConfig`<sup>Required</sup> <a name="ApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig"></a>

```go
func ApigeeOpdkConfig() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a>

---

##### `ApigeeXHybridConfig`<sup>Required</sup> <a name="ApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig"></a>

```go
func ApigeeXHybridConfig() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a>

---

##### `ApigeeEdgeConfigInput`<sup>Optional</sup> <a name="ApigeeEdgeConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput"></a>

```go
func ApigeeEdgeConfigInput() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---

##### `ApigeeOpdkConfigInput`<sup>Optional</sup> <a name="ApigeeOpdkConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput"></a>

```go
func ApigeeOpdkConfigInput() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---

##### `ApigeeXHybridConfigInput`<sup>Optional</sup> <a name="ApigeeXHybridConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput"></a>

```go
func ApigeeXHybridConfigInput() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput"></a>

```go
func PluginInstanceInput() *string
```

- *Type:* *string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance"></a>

```go
func PluginInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubAddonConfigGatewayPluginAddonConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonConfigGatewayPluginAddonConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonConfigGatewayPluginAddonConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs">PutGatewayPluginConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewayPluginConfigs` <a name="PutGatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs"></a>

```go
func PutGatewayPluginConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs">GatewayPluginConfigs</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput">GatewayPluginConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GatewayPluginConfigs`<sup>Required</sup> <a name="GatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs"></a>

```go
func GatewayPluginConfigs() ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a>

---

##### `GatewayPluginConfigsInput`<sup>Optional</sup> <a name="GatewayPluginConfigsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput"></a>

```go
func GatewayPluginConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubAddonConfigGatewayPluginAddonConfig
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---


### ApihubAddonTimeoutsOutputReference <a name="ApihubAddonTimeoutsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/apihubaddon"

apihubaddon.NewApihubAddonTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubAddonTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



