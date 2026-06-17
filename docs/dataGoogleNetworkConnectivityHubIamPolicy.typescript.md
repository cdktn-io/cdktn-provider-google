# `dataGoogleNetworkConnectivityHubIamPolicy` Submodule <a name="`dataGoogleNetworkConnectivityHubIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkConnectivityHubIamPolicy <a name="DataGoogleNetworkConnectivityHubIamPolicy" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy google_network_connectivity_hub_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer"></a>

```typescript
import { dataGoogleNetworkConnectivityHubIamPolicy } from '@cdktn/provider-google'

new dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy(scope: Construct, id: string, config: DataGoogleNetworkConnectivityHubIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig">DataGoogleNetworkConnectivityHubIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig">DataGoogleNetworkConnectivityHubIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleNetworkConnectivityHubIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleNetworkConnectivityHubIamPolicy } from '@cdktn/provider-google'

dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleNetworkConnectivityHubIamPolicy } from '@cdktn/provider-google'

dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleNetworkConnectivityHubIamPolicy } from '@cdktn/provider-google'

dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleNetworkConnectivityHubIamPolicy } from '@cdktn/provider-google'

dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleNetworkConnectivityHubIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkConnectivityHubIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkConnectivityHubIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkConnectivityHubIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hubInput">hubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hub">hub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hubInput"></a>

```typescript
public readonly hubInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkConnectivityHubIamPolicyConfig <a name="DataGoogleNetworkConnectivityHubIamPolicyConfig" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleNetworkConnectivityHubIamPolicy } from '@cdktn/provider-google'

const dataGoogleNetworkConnectivityHubIamPolicyConfig: dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.hub">hub</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#hub DataGoogleNetworkConnectivityHubIamPolicy#hub}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#id DataGoogleNetworkConnectivityHubIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkConnectivityHubIamPolicy.DataGoogleNetworkConnectivityHubIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/network_connectivity_hub_iam_policy#project DataGoogleNetworkConnectivityHubIamPolicy#project}.

---



