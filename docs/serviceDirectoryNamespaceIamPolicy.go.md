# `serviceDirectoryNamespaceIamPolicy` Submodule <a name="`serviceDirectoryNamespaceIamPolicy` Submodule" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDirectoryNamespaceIamPolicy <a name="ServiceDirectoryNamespaceIamPolicy" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy google_service_directory_namespace_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/servicedirectorynamespaceiampolicy"

servicedirectorynamespaceiampolicy.NewServiceDirectoryNamespaceIamPolicy(scope Construct, id *string, config ServiceDirectoryNamespaceIamPolicyConfig) ServiceDirectoryNamespaceIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig">ServiceDirectoryNamespaceIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig">ServiceDirectoryNamespaceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceDirectoryNamespaceIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/servicedirectorynamespaceiampolicy"

servicedirectorynamespaceiampolicy.ServiceDirectoryNamespaceIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/servicedirectorynamespaceiampolicy"

servicedirectorynamespaceiampolicy.ServiceDirectoryNamespaceIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/servicedirectorynamespaceiampolicy"

servicedirectorynamespaceiampolicy.ServiceDirectoryNamespaceIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/servicedirectorynamespaceiampolicy"

servicedirectorynamespaceiampolicy.ServiceDirectoryNamespaceIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServiceDirectoryNamespaceIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceDirectoryNamespaceIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceDirectoryNamespaceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServiceDirectoryNamespaceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDirectoryNamespaceIamPolicyConfig <a name="ServiceDirectoryNamespaceIamPolicyConfig" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/servicedirectorynamespaceiampolicy"

&servicedirectorynamespaceiampolicy.ServiceDirectoryNamespaceIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PolicyData: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy#name ServiceDirectoryNamespaceIamPolicy#name}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy#policy_data ServiceDirectoryNamespaceIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy#id ServiceDirectoryNamespaceIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy#name ServiceDirectoryNamespaceIamPolicy#name}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy#policy_data ServiceDirectoryNamespaceIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.serviceDirectoryNamespaceIamPolicy.ServiceDirectoryNamespaceIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_directory_namespace_iam_policy#id ServiceDirectoryNamespaceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



