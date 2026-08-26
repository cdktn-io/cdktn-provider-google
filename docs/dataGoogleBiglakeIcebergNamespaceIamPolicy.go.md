# `dataGoogleBiglakeIcebergNamespaceIamPolicy` Submodule <a name="`dataGoogleBiglakeIcebergNamespaceIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBiglakeIcebergNamespaceIamPolicy <a name="DataGoogleBiglakeIcebergNamespaceIamPolicy" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy google_biglake_iceberg_namespace_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebiglakeicebergnamespaceiampolicy"

datagooglebiglakeicebergnamespaceiampolicy.NewDataGoogleBiglakeIcebergNamespaceIamPolicy(scope Construct, id *string, config DataGoogleBiglakeIcebergNamespaceIamPolicyConfig) DataGoogleBiglakeIcebergNamespaceIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig">DataGoogleBiglakeIcebergNamespaceIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig">DataGoogleBiglakeIcebergNamespaceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBiglakeIcebergNamespaceIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebiglakeicebergnamespaceiampolicy"

datagooglebiglakeicebergnamespaceiampolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebiglakeicebergnamespaceiampolicy"

datagooglebiglakeicebergnamespaceiampolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebiglakeicebergnamespaceiampolicy"

datagooglebiglakeicebergnamespaceiampolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebiglakeicebergnamespaceiampolicy"

datagooglebiglakeicebergnamespaceiampolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBiglakeIcebergNamespaceIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBiglakeIcebergNamespaceIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBiglakeIcebergNamespaceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBiglakeIcebergNamespaceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBiglakeIcebergNamespaceIamPolicyConfig <a name="DataGoogleBiglakeIcebergNamespaceIamPolicyConfig" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebiglakeicebergnamespaceiampolicy"

&datagooglebiglakeicebergnamespaceiampolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Catalog: *string,
	NamespaceId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#catalog DataGoogleBiglakeIcebergNamespaceIamPolicy#catalog}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#namespace_id DataGoogleBiglakeIcebergNamespaceIamPolicy#namespace_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#id DataGoogleBiglakeIcebergNamespaceIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#project DataGoogleBiglakeIcebergNamespaceIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#catalog DataGoogleBiglakeIcebergNamespaceIamPolicy#catalog}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#namespace_id DataGoogleBiglakeIcebergNamespaceIamPolicy#namespace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#id DataGoogleBiglakeIcebergNamespaceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBiglakeIcebergNamespaceIamPolicy.DataGoogleBiglakeIcebergNamespaceIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#project DataGoogleBiglakeIcebergNamespaceIamPolicy#project}.

---



