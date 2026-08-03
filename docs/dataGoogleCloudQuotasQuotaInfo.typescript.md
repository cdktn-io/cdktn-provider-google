# `dataGoogleCloudQuotasQuotaInfo` Submodule <a name="`dataGoogleCloudQuotasQuotaInfo` Submodule" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudQuotasQuotaInfo <a name="DataGoogleCloudQuotasQuotaInfo" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info google_cloud_quotas_quota_info}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

new dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo(scope: Construct, id: string, config: DataGoogleCloudQuotasQuotaInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig">DataGoogleCloudQuotasQuotaInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig">DataGoogleCloudQuotasQuotaInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudQuotasQuotaInfo resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isConstruct"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformElement"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudQuotasQuotaInfo resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudQuotasQuotaInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudQuotasQuotaInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudQuotasQuotaInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensions">dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensionsInfos">dimensionsInfos</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isConcurrent">isConcurrent</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isFixed">isFixed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isPrecise">isPrecise</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricDisplayName">metricDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricUnit">metricUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaDisplayName">quotaDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIncreaseEligibility">quotaIncreaseEligibility</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.refreshInterval">refreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceRequestQuotaUri">serviceRequestQuotaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIdInput">quotaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaId">quotaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

---

##### `dimensionsInfos`<sup>Required</sup> <a name="dimensionsInfos" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensionsInfos"></a>

```typescript
public readonly dimensionsInfos: DataGoogleCloudQuotasQuotaInfoDimensionsInfosList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosList</a>

---

##### `isConcurrent`<sup>Required</sup> <a name="isConcurrent" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isConcurrent"></a>

```typescript
public readonly isConcurrent: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isFixed`<sup>Required</sup> <a name="isFixed" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isFixed"></a>

```typescript
public readonly isFixed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isPrecise`<sup>Required</sup> <a name="isPrecise" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isPrecise"></a>

```typescript
public readonly isPrecise: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricDisplayName`<sup>Required</sup> <a name="metricDisplayName" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricDisplayName"></a>

```typescript
public readonly metricDisplayName: string;
```

- *Type:* string

---

##### `metricUnit`<sup>Required</sup> <a name="metricUnit" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricUnit"></a>

```typescript
public readonly metricUnit: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quotaDisplayName`<sup>Required</sup> <a name="quotaDisplayName" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaDisplayName"></a>

```typescript
public readonly quotaDisplayName: string;
```

- *Type:* string

---

##### `quotaIncreaseEligibility`<sup>Required</sup> <a name="quotaIncreaseEligibility" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIncreaseEligibility"></a>

```typescript
public readonly quotaIncreaseEligibility: DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList</a>

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.refreshInterval"></a>

```typescript
public readonly refreshInterval: string;
```

- *Type:* string

---

##### `serviceRequestQuotaUri`<sup>Required</sup> <a name="serviceRequestQuotaUri" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceRequestQuotaUri"></a>

```typescript
public readonly serviceRequestQuotaUri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `quotaIdInput`<sup>Optional</sup> <a name="quotaIdInput" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIdInput"></a>

```typescript
public readonly quotaIdInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `quotaId`<sup>Required</sup> <a name="quotaId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaId"></a>

```typescript
public readonly quotaId: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudQuotasQuotaInfoConfig <a name="DataGoogleCloudQuotasQuotaInfoConfig" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

const dataGoogleCloudQuotasQuotaInfoConfig: dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#parent DataGoogleCloudQuotasQuotaInfo#parent}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.quotaId">quotaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#quota_id DataGoogleCloudQuotasQuotaInfo#quota_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#service DataGoogleCloudQuotasQuotaInfo#service}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#id DataGoogleCloudQuotasQuotaInfo#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#parent DataGoogleCloudQuotasQuotaInfo#parent}.

---

##### `quotaId`<sup>Required</sup> <a name="quotaId" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.quotaId"></a>

```typescript
public readonly quotaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#quota_id DataGoogleCloudQuotasQuotaInfo#quota_id}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#service DataGoogleCloudQuotasQuotaInfo#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/cloud_quotas_quota_info#id DataGoogleCloudQuotasQuotaInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudQuotasQuotaInfoDimensionsInfos <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfos" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

const dataGoogleCloudQuotasQuotaInfoDimensionsInfos: dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos = { ... }
```


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

const dataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails: dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails = { ... }
```


### DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility <a name="DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

const dataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility: dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

new dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

new dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails</a>

---


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosList <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosList" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

new dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.get"></a>

```typescript
public get(index: number): DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

new dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.applicableLocations">applicableLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.dimensions">dimensions</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos">DataGoogleCloudQuotasQuotaInfoDimensionsInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicableLocations`<sup>Required</sup> <a name="applicableLocations" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.applicableLocations"></a>

```typescript
public readonly applicableLocations: string[];
```

- *Type:* string[]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.details"></a>

```typescript
public readonly details: DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudQuotasQuotaInfoDimensionsInfos;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos">DataGoogleCloudQuotasQuotaInfoDimensionsInfos</a>

---


### DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList <a name="DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

new dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.get"></a>

```typescript
public get(index: number): DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference <a name="DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudQuotasQuotaInfo } from '@cdktn/provider-google'

new dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.ineligibilityReason">ineligibilityReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.isEligible">isEligible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ineligibilityReason`<sup>Required</sup> <a name="ineligibilityReason" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.ineligibilityReason"></a>

```typescript
public readonly ineligibilityReason: string;
```

- *Type:* string

---

##### `isEligible`<sup>Required</sup> <a name="isEligible" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.isEligible"></a>

```typescript
public readonly isEligible: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility</a>

---



