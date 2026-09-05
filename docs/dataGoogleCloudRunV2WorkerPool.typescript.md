# `dataGoogleCloudRunV2WorkerPool` Submodule <a name="`dataGoogleCloudRunV2WorkerPool` Submodule" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunV2WorkerPool <a name="DataGoogleCloudRunV2WorkerPool" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool google_cloud_run_v2_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool(scope: Construct, id: string, config: DataGoogleCloudRunV2WorkerPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig">DataGoogleCloudRunV2WorkerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig">DataGoogleCloudRunV2WorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudRunV2WorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isConstruct"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformElement"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudRunV2WorkerPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudRunV2WorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudRunV2WorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudRunV2WorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList">DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList">DataGoogleCloudRunV2WorkerPoolConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.customAudiences">customAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplits">instanceSplits</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList">DataGoogleCloudRunV2WorkerPoolInstanceSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplitStatuses">instanceSplitStatuses</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lastModifier">lastModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestCreatedRevision">latestCreatedRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestReadyRevision">latestReadyRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.observedGeneration">observedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.scaling">scaling</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList">DataGoogleCloudRunV2WorkerPoolScalingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.template">template</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList">DataGoogleCloudRunV2WorkerPoolTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList">DataGoogleCloudRunV2WorkerPoolTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList">DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList</a>

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.conditions"></a>

```typescript
public readonly conditions: DataGoogleCloudRunV2WorkerPoolConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList">DataGoogleCloudRunV2WorkerPoolConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customAudiences`<sup>Required</sup> <a name="customAudiences" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.customAudiences"></a>

```typescript
public readonly customAudiences: string[];
```

- *Type:* string[]

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `instanceSplits`<sup>Required</sup> <a name="instanceSplits" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplits"></a>

```typescript
public readonly instanceSplits: DataGoogleCloudRunV2WorkerPoolInstanceSplitsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList">DataGoogleCloudRunV2WorkerPoolInstanceSplitsList</a>

---

##### `instanceSplitStatuses`<sup>Required</sup> <a name="instanceSplitStatuses" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplitStatuses"></a>

```typescript
public readonly instanceSplitStatuses: DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `lastModifier`<sup>Required</sup> <a name="lastModifier" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lastModifier"></a>

```typescript
public readonly lastModifier: string;
```

- *Type:* string

---

##### `latestCreatedRevision`<sup>Required</sup> <a name="latestCreatedRevision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestCreatedRevision"></a>

```typescript
public readonly latestCreatedRevision: string;
```

- *Type:* string

---

##### `latestReadyRevision`<sup>Required</sup> <a name="latestReadyRevision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestReadyRevision"></a>

```typescript
public readonly latestReadyRevision: string;
```

- *Type:* string

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.scaling"></a>

```typescript
public readonly scaling: DataGoogleCloudRunV2WorkerPoolScalingList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList">DataGoogleCloudRunV2WorkerPoolScalingList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.template"></a>

```typescript
public readonly template: DataGoogleCloudRunV2WorkerPoolTemplateList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList">DataGoogleCloudRunV2WorkerPoolTemplateList</a>

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terminalCondition"></a>

```typescript
public readonly terminalCondition: DataGoogleCloudRunV2WorkerPoolTerminalConditionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList">DataGoogleCloudRunV2WorkerPoolTerminalConditionList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunV2WorkerPoolBinaryAuthorization <a name="DataGoogleCloudRunV2WorkerPoolBinaryAuthorization" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolBinaryAuthorization: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization = { ... }
```


### DataGoogleCloudRunV2WorkerPoolConditions <a name="DataGoogleCloudRunV2WorkerPoolConditions" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolConditions: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions = { ... }
```


### DataGoogleCloudRunV2WorkerPoolConfig <a name="DataGoogleCloudRunV2WorkerPoolConfig" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolConfig: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.name">name</a></code> | <code>string</code> | Name of the WorkerPool. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool#id DataGoogleCloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool#project DataGoogleCloudRunV2WorkerPool#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool#name DataGoogleCloudRunV2WorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool#id DataGoogleCloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool#location DataGoogleCloudRunV2WorkerPool#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/cloud_run_v2_worker_pool#project DataGoogleCloudRunV2WorkerPool#project}.

---

### DataGoogleCloudRunV2WorkerPoolInstanceSplits <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplits" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolInstanceSplits: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits = { ... }
```


### DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses = { ... }
```


### DataGoogleCloudRunV2WorkerPoolScaling <a name="DataGoogleCloudRunV2WorkerPoolScaling" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolScaling: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplate <a name="DataGoogleCloudRunV2WorkerPoolTemplate" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplate: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainers <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainers: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersEnv: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersResources <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersResources" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersResources: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector <a name="DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateNodeSelector: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumes <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumes" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVolumes: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVpcAccess: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces = { ... }
```


### DataGoogleCloudRunV2WorkerPoolTerminalCondition <a name="DataGoogleCloudRunV2WorkerPoolTerminalCondition" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolTerminalCondition: dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList <a name="DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference <a name="DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification">breakglassJustification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault">useDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization">DataGoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `breakglassJustification`<sup>Required</sup> <a name="breakglassJustification" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```typescript
public readonly breakglassJustification: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault"></a>

```typescript
public readonly useDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolBinaryAuthorization;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization">DataGoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---


### DataGoogleCloudRunV2WorkerPoolConditionsList <a name="DataGoogleCloudRunV2WorkerPoolConditionsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolConditionsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolConditionsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions">DataGoogleCloudRunV2WorkerPoolConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolConditions;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions">DataGoogleCloudRunV2WorkerPoolConditions</a>

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitsList <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits">DataGoogleCloudRunV2WorkerPoolInstanceSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolInstanceSplits;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits">DataGoogleCloudRunV2WorkerPoolInstanceSplits</a>

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a>

---


### DataGoogleCloudRunV2WorkerPoolScalingList <a name="DataGoogleCloudRunV2WorkerPoolScalingList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolScalingOutputReference <a name="DataGoogleCloudRunV2WorkerPoolScalingOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount">manualInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode">scalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling">DataGoogleCloudRunV2WorkerPoolScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualInstanceCount`<sup>Required</sup> <a name="manualInstanceCount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount"></a>

```typescript
public readonly manualInstanceCount: number;
```

- *Type:* number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolScaling;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling">DataGoogleCloudRunV2WorkerPoolScaling</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.grpc"></a>

```typescript
public readonly grpc: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList</a>

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList</a>

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList">DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers">DataGoogleCloudRunV2WorkerPoolTemplateContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env"></a>

```typescript
public readonly env: DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList">DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a>

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainers;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers">DataGoogleCloudRunV2WorkerPoolTemplateContainers</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources">DataGoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersResources;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources">DataGoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.grpc"></a>

```typescript
public readonly grpc: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList</a>

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList</a>

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateList <a name="DataGoogleCloudRunV2WorkerPoolTemplateList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList <a name="DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator">accelerator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator"></a>

```typescript
public readonly accelerator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled">gpuZonalRedundancyDisabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector">nodeSelector</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate">DataGoogleCloudRunV2WorkerPoolTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers"></a>

```typescript
public readonly containers: DataGoogleCloudRunV2WorkerPoolTemplateContainersList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersList</a>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `encryptionKeyRevocationAction`<sup>Required</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction"></a>

```typescript
public readonly encryptionKeyRevocationAction: string;
```

- *Type:* string

---

##### `encryptionKeyShutdownDuration`<sup>Required</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration"></a>

```typescript
public readonly encryptionKeyShutdownDuration: string;
```

- *Type:* string

---

##### `gpuZonalRedundancyDisabled`<sup>Required</sup> <a name="gpuZonalRedundancyDisabled" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled"></a>

```typescript
public readonly gpuZonalRedundancyDisabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `nodeSelector`<sup>Required</sup> <a name="nodeSelector" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector"></a>

```typescript
public readonly nodeSelector: DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataGoogleCloudRunV2WorkerPoolTemplateVolumesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesList</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplate;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate">DataGoogleCloudRunV2WorkerPoolTemplate</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes">DataGoogleCloudRunV2WorkerPoolTemplateVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir"></a>

```typescript
public readonly emptyDir: DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs"></a>

```typescript
public readonly gcs: DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs"></a>

```typescript
public readonly nfs: DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVolumes;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes">DataGoogleCloudRunV2WorkerPoolTemplateVolumes</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items"></a>

```typescript
public readonly items: DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress"></a>

```typescript
public readonly egress: string;
```

- *Type:* string

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---


### DataGoogleCloudRunV2WorkerPoolTerminalConditionList <a name="DataGoogleCloudRunV2WorkerPoolTerminalConditionList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.get"></a>

```typescript
public get(index: number): DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition">DataGoogleCloudRunV2WorkerPoolTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudRunV2WorkerPoolTerminalCondition;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition">DataGoogleCloudRunV2WorkerPoolTerminalCondition</a>

---



