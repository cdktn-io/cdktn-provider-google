# `dataGoogleEventarcPipelineIamPolicy` Submodule <a name="`dataGoogleEventarcPipelineIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleEventarcPipelineIamPolicy <a name="DataGoogleEventarcPipelineIamPolicy" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy google_eventarc_pipeline_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.Initializer"></a>

```typescript
import { dataGoogleEventarcPipelineIamPolicy } from '@cdktn/provider-google'

new dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy(scope: Construct, id: string, config: DataGoogleEventarcPipelineIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig">DataGoogleEventarcPipelineIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig">DataGoogleEventarcPipelineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleEventarcPipelineIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleEventarcPipelineIamPolicy } from '@cdktn/provider-google'

dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleEventarcPipelineIamPolicy } from '@cdktn/provider-google'

dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleEventarcPipelineIamPolicy } from '@cdktn/provider-google'

dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleEventarcPipelineIamPolicy } from '@cdktn/provider-google'

dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleEventarcPipelineIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleEventarcPipelineIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleEventarcPipelineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleEventarcPipelineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleEventarcPipelineIamPolicyConfig <a name="DataGoogleEventarcPipelineIamPolicyConfig" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleEventarcPipelineIamPolicy } from '@cdktn/provider-google'

const dataGoogleEventarcPipelineIamPolicyConfig: dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#pipeline_id DataGoogleEventarcPipelineIamPolicy#pipeline_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#id DataGoogleEventarcPipelineIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#location DataGoogleEventarcPipelineIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#project DataGoogleEventarcPipelineIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#pipeline_id DataGoogleEventarcPipelineIamPolicy#pipeline_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#id DataGoogleEventarcPipelineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#location DataGoogleEventarcPipelineIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleEventarcPipelineIamPolicy.DataGoogleEventarcPipelineIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/eventarc_pipeline_iam_policy#project DataGoogleEventarcPipelineIamPolicy#project}.

---



