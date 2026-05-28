# `dataGoogleCloudRunV2WorkerPoolIamPolicy` Submodule <a name="`dataGoogleCloudRunV2WorkerPoolIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunV2WorkerPoolIamPolicy <a name="DataGoogleCloudRunV2WorkerPoolIamPolicy" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy google_cloud_run_v2_worker_pool_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPoolIamPolicy } from '@cdktn/provider-google'

new dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy(scope: Construct, id: string, config: DataGoogleCloudRunV2WorkerPoolIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig">DataGoogleCloudRunV2WorkerPoolIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig">DataGoogleCloudRunV2WorkerPoolIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudRunV2WorkerPoolIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPoolIamPolicy } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPoolIamPolicy } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPoolIamPolicy } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPoolIamPolicy } from '@cdktn/provider-google'

dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudRunV2WorkerPoolIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudRunV2WorkerPoolIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudRunV2WorkerPoolIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudRunV2WorkerPoolIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunV2WorkerPoolIamPolicyConfig <a name="DataGoogleCloudRunV2WorkerPoolIamPolicyConfig" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleCloudRunV2WorkerPoolIamPolicy } from '@cdktn/provider-google'

const dataGoogleCloudRunV2WorkerPoolIamPolicyConfig: dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}.

---



