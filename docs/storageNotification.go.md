# `storageNotification` Submodule <a name="`storageNotification` Submodule" id="@cdktn/provider-google.storageNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageNotification <a name="StorageNotification" id="@cdktn/provider-google.storageNotification.StorageNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification google_storage_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageNotification.StorageNotification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagenotification"

storagenotification.NewStorageNotification(scope Construct, id *string, config StorageNotificationConfig) StorageNotification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig">StorageNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageNotification.StorageNotification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageNotification.StorageNotification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageNotification.StorageNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig">StorageNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.resetEventTypes">ResetEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.resetObjectNamePrefix">ResetObjectNamePrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.storageNotification.StorageNotification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.storageNotification.StorageNotification.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageNotification.StorageNotification.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.storageNotification.StorageNotification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageNotification.StorageNotification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageNotification.StorageNotification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.storageNotification.StorageNotification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageNotification.StorageNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.storageNotification.StorageNotification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.storageNotification.StorageNotification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.storageNotification.StorageNotification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.storageNotification.StorageNotification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.storageNotification.StorageNotification.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageNotification.StorageNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.storageNotification.StorageNotification.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.storageNotification.StorageNotification.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageNotification.StorageNotification.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageNotification.StorageNotification.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageNotification.StorageNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.storageNotification.StorageNotification.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageNotification.StorageNotification.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.storageNotification.StorageNotification.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageNotification.StorageNotification.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageNotification.StorageNotification.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.storageNotification.StorageNotification.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageNotification.StorageNotification.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktn/provider-google.storageNotification.StorageNotification.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetEventTypes` <a name="ResetEventTypes" id="@cdktn/provider-google.storageNotification.StorageNotification.resetEventTypes"></a>

```go
func ResetEventTypes()
```

##### `ResetObjectNamePrefix` <a name="ResetObjectNamePrefix" id="@cdktn/provider-google.storageNotification.StorageNotification.resetObjectNamePrefix"></a>

```go
func ResetObjectNamePrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageNotification resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.storageNotification.StorageNotification.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagenotification"

storagenotification.StorageNotification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageNotification.StorageNotification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.storageNotification.StorageNotification.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagenotification"

storagenotification.StorageNotification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageNotification.StorageNotification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.storageNotification.StorageNotification.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagenotification"

storagenotification.StorageNotification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageNotification.StorageNotification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.storageNotification.StorageNotification.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagenotification"

storagenotification.StorageNotification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageNotification.StorageNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageNotification.StorageNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageNotification.StorageNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageNotification.StorageNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.notificationId">NotificationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.eventTypesInput">EventTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.objectNamePrefixInput">ObjectNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.payloadFormatInput">PayloadFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.payloadFormat">PayloadFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.storageNotification.StorageNotification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.storageNotification.StorageNotification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.storageNotification.StorageNotification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.storageNotification.StorageNotification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.storageNotification.StorageNotification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.storageNotification.StorageNotification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.storageNotification.StorageNotification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageNotification.StorageNotification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageNotification.StorageNotification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageNotification.StorageNotification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageNotification.StorageNotification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageNotification.StorageNotification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageNotification.StorageNotification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageNotification.StorageNotification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.storageNotification.StorageNotification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationId`<sup>Required</sup> <a name="NotificationId" id="@cdktn/provider-google.storageNotification.StorageNotification.property.notificationId"></a>

```go
func NotificationId() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.storageNotification.StorageNotification.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google.storageNotification.StorageNotification.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktn/provider-google.storageNotification.StorageNotification.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EventTypesInput`<sup>Optional</sup> <a name="EventTypesInput" id="@cdktn/provider-google.storageNotification.StorageNotification.property.eventTypesInput"></a>

```go
func EventTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectNamePrefixInput`<sup>Optional</sup> <a name="ObjectNamePrefixInput" id="@cdktn/provider-google.storageNotification.StorageNotification.property.objectNamePrefixInput"></a>

```go
func ObjectNamePrefixInput() *string
```

- *Type:* *string

---

##### `PayloadFormatInput`<sup>Optional</sup> <a name="PayloadFormatInput" id="@cdktn/provider-google.storageNotification.StorageNotification.property.payloadFormatInput"></a>

```go
func PayloadFormatInput() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-google.storageNotification.StorageNotification.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageNotification.StorageNotification.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-google.storageNotification.StorageNotification.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EventTypes`<sup>Required</sup> <a name="EventTypes" id="@cdktn/provider-google.storageNotification.StorageNotification.property.eventTypes"></a>

```go
func EventTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectNamePrefix`<sup>Required</sup> <a name="ObjectNamePrefix" id="@cdktn/provider-google.storageNotification.StorageNotification.property.objectNamePrefix"></a>

```go
func ObjectNamePrefix() *string
```

- *Type:* *string

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktn/provider-google.storageNotification.StorageNotification.property.payloadFormat"></a>

```go
func PayloadFormat() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google.storageNotification.StorageNotification.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.storageNotification.StorageNotification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageNotificationConfig <a name="StorageNotificationConfig" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/storagenotification"

&storagenotification.StorageNotificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	PayloadFormat: *string,
	Topic: *string,
	CustomAttributes: *map[string]*string,
	EventTypes: *[]*string,
	ObjectNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the bucket. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.payloadFormat">PayloadFormat</a></code> | <code>*string</code> | The desired content of the Payload. One of "JSON_API_V1" or "NONE". |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.topic">Topic</a></code> | <code>*string</code> | The Cloud Pub/Sub topic to which this subscription publishes. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | A set of key/value attribute pairs to attach to each Cloud Pub/Sub message published for this notification subscription. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | List of event type filters for this notification config. |
| <code><a href="#@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>*string</code> | Specifies a prefix path filter for this notification config. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification#bucket StorageNotification#bucket}

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.payloadFormat"></a>

```go
PayloadFormat *string
```

- *Type:* *string

The desired content of the Payload. One of "JSON_API_V1" or "NONE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification#payload_format StorageNotification#payload_format}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The Cloud Pub/Sub topic to which this subscription publishes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification#topic StorageNotification#topic}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value attribute pairs to attach to each Cloud Pub/Sub message published for this notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification#custom_attributes StorageNotification#custom_attributes}

---

##### `EventTypes`<sup>Optional</sup> <a name="EventTypes" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.eventTypes"></a>

```go
EventTypes *[]*string
```

- *Type:* *[]*string

List of event type filters for this notification config.

If not specified, Cloud Storage will send notifications for all event types. The valid types are: "OBJECT_FINALIZE", "OBJECT_METADATA_UPDATE", "OBJECT_DELETE", "OBJECT_ARCHIVE"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification#event_types StorageNotification#event_types}

---

##### `ObjectNamePrefix`<sup>Optional</sup> <a name="ObjectNamePrefix" id="@cdktn/provider-google.storageNotification.StorageNotificationConfig.property.objectNamePrefix"></a>

```go
ObjectNamePrefix *string
```

- *Type:* *string

Specifies a prefix path filter for this notification config.

Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/storage_notification#object_name_prefix StorageNotification#object_name_prefix}

---



