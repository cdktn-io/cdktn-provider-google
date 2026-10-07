# `dataGoogleCloudbuildWorkerPool` Submodule <a name="`dataGoogleCloudbuildWorkerPool` Submodule" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildWorkerPool <a name="DataGoogleCloudbuildWorkerPool" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool(scope: Construct, id: string, config: DataGoogleCloudbuildWorkerPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig">DataGoogleCloudbuildWorkerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig">DataGoogleCloudbuildWorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudbuildWorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataGoogleCloudbuildWorkerPoolNetworkConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a>

---

##### `privateServiceConnect`<sup>Required</sup> <a name="privateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```typescript
public readonly privateServiceConnect: DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workerConfig`<sup>Required</sup> <a name="workerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig"></a>

```typescript
public readonly workerConfig: DataGoogleCloudbuildWorkerPoolWorkerConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildWorkerPoolConfig <a name="DataGoogleCloudbuildWorkerPoolConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudbuildWorkerPoolConfig: dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name">name</a></code> | <code>string</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#location DataGoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#name DataGoogleCloudbuildWorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#project DataGoogleCloudbuildWorkerPool#project}

---

### DataGoogleCloudbuildWorkerPoolNetworkConfig <a name="DataGoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudbuildWorkerPoolNetworkConfig: dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig = { ... }
```


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudbuildWorkerPoolPrivateServiceConnect: dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect = { ... }
```


### DataGoogleCloudbuildWorkerPoolWorkerConfig <a name="DataGoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

const dataGoogleCloudbuildWorkerPoolWorkerConfig: dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildWorkerPoolNetworkConfigList <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">peeredNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```typescript
public readonly peeredNetwork: string;
```

- *Type:* string

---

##### `peeredNetworkIpRange`<sup>Required</sup> <a name="peeredNetworkIpRange" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```typescript
public readonly peeredNetworkIpRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildWorkerPoolNetworkConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">routeAllTraffic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `routeAllTraffic`<sup>Required</sup> <a name="routeAllTraffic" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```typescript
public readonly routeAllTraffic: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildWorkerPoolPrivateServiceConnect;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigList <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildWorkerPool } from '@cdktn/provider-google'

new dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">noExternalIp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization"></a>

```typescript
public readonly enableNestedVirtualization: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `noExternalIp`<sup>Required</sup> <a name="noExternalIp" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```typescript
public readonly noExternalIp: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildWorkerPoolWorkerConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a>

---



