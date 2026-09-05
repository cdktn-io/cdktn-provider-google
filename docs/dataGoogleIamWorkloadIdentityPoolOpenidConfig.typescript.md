# `dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config google_iam_workload_identity_pool_openid_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolOpenidConfig } from '@cdktn/provider-google'

new dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig">DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig">DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolOpenidConfig } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolOpenidConfig } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolOpenidConfig } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolOpenidConfig } from '@cdktn/provider-google'

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPoolOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported">idTokenSigningAlgValuesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported">responseTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported">subjectTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `idTokenSigningAlgValuesSupported`<sup>Required</sup> <a name="idTokenSigningAlgValuesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```typescript
public readonly idTokenSigningAlgValuesSupported: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `responseTypesSupported`<sup>Required</sup> <a name="responseTypesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported"></a>

```typescript
public readonly responseTypesSupported: string[];
```

- *Type:* string[]

---

##### `subjectTypesSupported`<sup>Required</sup> <a name="subjectTypesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported"></a>

```typescript
public readonly subjectTypesSupported: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolOpenidConfig } from '@cdktn/provider-google'

const dataGoogleIamWorkloadIdentityPoolOpenidConfigConfig: dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName">resourceName</a></code> | <code>string</code> | The OIDC discovery URI. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The OIDC discovery URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#resource_name DataGoogleIamWorkloadIdentityPoolOpenidConfig#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



